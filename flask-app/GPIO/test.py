import time

# Socket.io
import socketio

sio = socketio.Client()
sio.connect( "http://localhost:3000" )

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

sio.emit( "message", "hello" )