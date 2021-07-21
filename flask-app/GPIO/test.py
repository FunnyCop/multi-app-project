import time

# Socket.io
import socketio

io = socketio.Client()
io.connect( "http://192.168.1.2:8000" )

# CircuitPython Modules
import board
import busio

# Adafruit ADS1115 Modules
import adafruit_ads1x15.ads1115 as ADS
from adafruit_ads1x15.analog_in import AnalogIn

# Create the I2C Bus
i2c = busio.I2C( board.SCL, board.SDA )

# Create the ADS1115 Device
ads = ADS.ADS1115( i2c )

# Create Channels for Measuring Input Voltage
channels = [
    AnalogIn( ads, ADS.P0 ), # Pin A0 -- 100k ohm pot
    AnalogIn( ads, ADS.P1 ), # Pin A1 -- momentary switch
    AnalogIn( ads, ADS.P2 ), # Pin A2 -- 1st switch state
    AnalogIn( ads, ADS.P3 )  # Pin A3 -- 2nd switch state
]

# Loop for Reading Input
while True:
    rotation = 0

    # If the Input Voltage is Below 0
    # Increase the Gain Amplification
    if channels[ 0 ].voltage < 0:
        ads.gain = 2/3

    # If the Input Voltage is Above 0
    # Set the Gain Amplification to Default
    else:
        ads.gain = 1

    if channels[ 0 ].voltage <= 0.01:
        rotation = 0
    elif channels[ 0 ].voltage >= 3.157:
        rotation = 360
    else:
        rotation = ( channels[ 0 ].voltage - 0.01 ) * ( 31 + ( 2443 / 3147 ) )

        if rotation <= 0.01:
            rotation = 0
        elif rotation >= 3.157:
            rotation = 100

    rotation = f"{ rotation }deg"

    # Print the Voltage from Pin A0
    io.emit( "NewRotation", rotation )

    time.sleep( 0.05 )