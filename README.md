# UFOs

## Overview of Project

This analysis involved building a html website to host a user-friendly dataset in a table with filtering options. The form and content of the website is geared towards the topic: UFO sightings. 



### Tools

* HTML

* JavaScript

* CSS

* D3 



## Results

The filters can take up to 5 criteria: date; city; state; country; and/or shape. As the user enters their input, the JavaScript responds using d3 to filter the table (based on change in input, rather than a button to click). See the screenshots below of various filters applied to the table.


<img src="static\images\san-diego.png" width="75%" height="75%"> 

The above shows the results where the city is San Diego.

<img src="static\images\new-years.png" width="75%" height="75%"> 

The above shows the results on 1-01-2010

<img src="static\images\new-years-fl.png" width="75%" height="75%"> 

The above shows the results on 1-01-2010 in Florida. 

<img src="static\images\us-fireball.png" width="75%" height="75%"> 

The above shows the results with the shape "fireball".

<img src="static\images\all-filters.png" width="75%" height="75%"> 

The above shows an example of using all five filter fields: a sighting of a fireball shape in Boca Raton, Florida on New Years Day 2010.



## Summary 

One drawback to this design is that the user might not know all of the options for each filter (ie what shapes they can choose from). Additional recommendations for further development could include using a drop down menu so that the user can select from values that exist in the dataset; this could also include a calendar selection for the date and a responsive does not exist return where the combindation of filters does not return a row. 