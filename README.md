# Landing Page Project

## Table of Contents

### Add script file to HTML

I attached the **app.js**  file to HTML using the **<script>** tag.

### creating new section

I declared a *function* with no parameter that does all the creation and setting attribute processes.
This function is mainly to create the section and append it to **<main>**.
Inside it i created 2 more *function* one for creating and appending **<div>** the other for **<h2>**,**<p>**.
I called that method 4 times to create 4 more sections other than the one inside *HTML* file.

### Make the viewport class active

I get all the sections of the page throw the *querySelectorAll* document property.
Then iterate on each sections with **forEach** loop.
I used the *Arrow Function* inside the loop to get the **HTMLElement**.
So i can use the *getBoundingClientRect()* inside an **if** condition to detect if the sections get to the viewport or not.
If true so, the active class is set to the sections being viewed, If not so the class is removed.

### Creating the menu navigation menu

First, i get the **ul** throw *getElementById()* .
Then i define a *function* that does all the additions and appending process.
Inside the function, i create a fragment that creates the **li** and adds all the attributes.
*I add **dataset** called navigation to **li** attributes to help me in slowing the navigation process throw clicking*.

### Navigation to the section

I add a *click* EventListener to **ul** to interact to user so it moves to the clicked item *smoothly*.
First, i prevent it's default action so i can add the smooth effect.
Second, i get the target element by **dataset = navigation** then add the effect by *scrollIntoView()*.