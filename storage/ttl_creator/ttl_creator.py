#this file is responsible for creating the ttl files that will be used as storage for the data and will also download the data from the web
import sys
import os
import time
import json
import csv
import requests
import shutil
import csv
from pysubyt import JinjaBasedGenerator, SourceFactory, SinkFactory, Settings

parent_dit = os.path.dirname(os.path.abspath(__file__))
output_dir = parent_dit

url = 'https://docs.google.com/spreadsheets/d/1j3yuY5lmoPMo91w6e3kkJ6pmp1X6FVGUtLealuKJ3wE/export?format=csv&id=1zc0bZdpl-Eoi35lI_5BGkElbscplyQRyNPLkSgeEyEQ&gid=124596284'
r = requests.get(url, allow_redirects=True)
print(r.status_code)
with open(os.path.join(output_dir, "GS_EMOBON_sampling_info.csv"), "wb") as f:
        f.write(r.content)