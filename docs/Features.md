## Features

## Proposed Features

-- Place to keep records of radio station listening or transmitting equipment, model & serial numbers, antennas, radio shack and workbench photos, possibly links to scanned manuals online, photos, eHam/QRZ information, etc.

-- User Profile

-- Search Bar and/or Search Form or Search Page.  User enters in whatever information is known to user about contact, log, etc.

-- Ability to print, import, export, save and share log files (social media, web, etc.).  Saved data from SWL log could possibly be swl.log or swl.db.  Ham Log could be ham.log 

-- Shortwave Logging

 * This *Logging Input* Form should contain a form allowing input of these items on a single screen.  Entered information into this form will be saved to database.

 aka Logbook or Log Input Form

    * Frequency in kHz or MHz.  (Format example: 17.250.000 MHz or 17,250.000 kHz)) [Input Field] Possibly Seperated, with additional drop down so you can select MHz or kHz.
    * Station Identification and/or call letters (i.e. VOA or Voice of America) [some have both] 
    * Transmitter and/or Transmitter Antenna Location(s) stated as VIA. (i.e. Voice of America VIA New York) 
    * LocalTime and/or GMT/UTC entries [Could possibly autopouplate from Network Time/NNTP] [Format: 01:00:00] most logs are kept in GMT/UTC form.
    * Date of Reception in short or long form:  FCC likes long form [Monday, January 12th, 1506] but could typcially be in the format 01/01/1999 for ease of entry. 
    * QSL Sent and or Received (Indicating a QSL card was sent and/or received by listener) {Yes / No box}
    * Indicated signal received was indicated to be having been "jammed" or intentionally distored with noise. (Checkbox or Yes/No)
    * Brief Description (Text Box) for describing the content of received programming during time period indicated, (ie adverts, music, etc.)
    * upload container for sound files [.wav, .mp3, etc] if user has recorded audio for contact
    * Band: 120m, 90m, 75m, 60m, 49m, 41m, 31m, 25m, 22m, 19m, 16m, 15m, 13m, 11m [Dropdown Selection Menu, Radio Button or Input Field], also if you type in a specific Frequency, rules should be applied to input which would autocomplete the *Band* selection if input is within a certain frequency range denoting a "Band".
    * Transmitter and/or Receiver Mode: AM, FM, FSK, PSK, CW, USB, LSB, RTTY, AFSK, etc.
    * Station Contact information for QSL card sent/received purposes {Address, POBox, Country, State, Province, Zip/PostCodeetc.}
    * Notes/Comments [Text Box]
    * Notes/Information on receiver selected audio / notch / passband filters (in Hz) and settings.
    * Transmitter Power in mW (miliwatt), W (Watt(s), kW (Kilowatts) or MW (Megawatts) if known from published data.
    * Some publications will indicate which direction [towards a specific geographical region] (ie N. Asia) a particular transmission was intended to be received. [This probably should be a selection box or drop down list]
    * Alternative Frequencies that an identical transmission can/could be heard [in kHz or MHz format]
    * Brief audio receiption report as to quality of received transmission in SINAD, SINPO or a 5x9 ; 599 format or S units (typically +9 if strong as indicated on Volume Unit/S-Meter of receiver)  May also include text input field which may say Weak, Strong, Inaudible, Fades, etc.

 * Export Save to logbook PDF, .txt or .doc/.docx or .xls/.xlsx or CSV formats.  
 * Import logs from other formats and popular logging programs. Possibly ability to store scanned images of paper log forms. See integrations below.

-- Ham/Amateur Radio Logging:

   Primarily the same as Shortwave Logging as above, but: 

    * Band: 160m, 80m, 40m, 30m, 20m, 17m, 10m []
    * ITU/IARU Emission Type: See: https://ftp.unpad.ac.id/orari/orari-diklat/pemula/teknik-operasi/operating-procedures/What%20are%20the%20designation%20of%20emissions%20allotted%20to%20amateur%20radio%20service.htm
    * during some contest operations conducted on the radio, some operators will pass along QTH/Location, Equipment/Radio, Antenna and a brief signal report in numerical form, typically something like 599 or a SINPO code.

-- AM/MW DX Logging
    
    * Frequency in kHZ
    * Local Time or GMT/UTC
    * Call Sign (ie KW)
    * Brief Description (Text Box) for describing the content of recived programming during time period indicated, (ie adverts, music, etc.)

-- DTV Station DX logging

* Future integration ?? ability to log DTV stations received.  Although TV logging may be outside the scope of this project.

-- VHF/UHF Amateur Radio Band contact logging (6m, 2m, 1.25m (220MHz), 70cm, 40cm, 800-900MHz, etc).

* Future integration ; unsure how these users accomplish their logging without more reseach.

-- Sattelite Logging 

   * Lat and Long 
   * Azimuth

-- VHF/UHF Radio Scanner Logging

Some users may like to log new frequencies while using their scanner, especially to upload data to RadioReference site through this link: ([https://www.radioreference.com/apps/submit/]).  Their API notes are here: [https://wiki.radioreference.com/index.php/API] and has also a web service which helps users program their radios. [https://wiki.radioreference.com/index.php/RadioReference.com_Web_Service] and [https://www.radioreference.com/apps/content/?cid=3] as well as [https://wiki.radioreference.com/index.php/RadioReference.com_Web_Service3.1]

-- VHF/UHF Contesting   

  * Provide a method and form for easily logging contacts during a VHF/UHF contest.

-- QSL card sent/received database [possibly include .jpeg/.jpg files] of cards received.

-- SWL Frequency prediction using data published in 40 Volumes of Passport to World Band Radio (1988-2007) and World Radio TV Handbook (WRTH) ; ie being able to predict what you may be able to hear in a particular geographic region at any particular time (UTC/GMT) using historical data.  Database is indexed by Country, Frequency, Lanugage, Time GMT/UTC, Time Length of programming {ie 09:00 UTC/GMT to 11:00 UTC/GMT}

-- Callsign Lookup (FCC Database or Radioreference)

## Proposed Integrations

- ARRL Logbook of the World (LoTW) http://www.arrl.org/logbook-of-the-world and https://lotw.arrl.org/lotwuser/default

  * Their Developer information: https://lotw.arrl.org/lotw-help/developer-information/?lang=en and http://www.arrl.org/developer and http://www.arrl.org/files/file/LoTW_Developer/DeveloperIntro.pdf
  

- Radio Reference [http://www.radioreference.org] ; See -- VHF/UHF Radio Scanner Logging

- Solar/Sunspot Cycle

- Rig Control for Yaesu, ICOM and Kenwood radios.  FlexRadio and SDR's (Software Defined Radio) ie (RTL-SDR); See https://www.arrl.org/files/file/Technology/tis/info/pdf/990102qex019.pdf

- Grayline for SWL [Timezone Info & Shaded Map [https://dx.qsl.net/propagation/greyline.html] this would show areas where it is light orand/or  Mac dark [Night / Day]

- FCC Database(s) Search (possibly from ([https://wireless2.fcc.gov/UlsApp/UlsSearch/searchLicense.jsp]) or (https://wireless2.fcc.gov/UlsApp/UlsSearch/searchAmateur.jsp)  Their search API notes are: https://www.fcc.gov/reports-research/developers/license-view-api

* QRZ Logbook Their API documentation https://www.qrz.com/docs/logbook/QRZLogbookAPI.html  also https://www.qrz.com/page/xml_data.html

- eQSL [https://www.eqsl.cc/qslcard/Index.cfm] Their developer notes and API are: https://www.eqsl.cc/qslcard/Programming.cfm

## Contest Logging and Awards

-- DXCC [DX Century Club]
-- WAS [Worked All States]
-- WAZ [Worked All Zones]

* Ability to add new Contest Logging types; currently not sure whats required for contest/award submission.

## Splash Screen

## Login

Username
Password

Method: via browser

This example : https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_login_form

## Application Menu/Navbar

  

## Database

 -- a PostgreSQL SWL Database(s) containing historical and published frequency reference(s) in various periodicals and publications.
    * To include Frequency in (Megahertz) MHz or (Kilohertz) kHz, 
    * Geographical Information
    * Station Contact Information
     - Typically includes City, State, Province, County, Country, Zipcode/Postcode information,
    * Language(s) that were broadcast [English, Spanish, French, German, Japanse, Chinese, etc.]
    * Type, Output Power, Antenna type, etc information of transmitters. (Typically published in WRTH Handbook)

     -- Including methods of searching & checking for duplicate logbook entries.

     -- Ability to print out this data from a search query so that user can have 

## Wiki

Github Wiki

## Website {}

Possibly hosted on github.io

## Target Devices

Desktop
Mobile Device: Android Phone / 11" Android Tablet 
Operating Systems: Windows
                   Linux
                   Mac OSX
                   iOS
                   Android
Browsers: Edge
          Firefox
          Chrome
          Opera
          Safari