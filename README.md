# The-Homepage-Grid

To complete this chanllenge I decided to Use HTML, CSS, and JavaScript mostly beacuse that's what I'm most comfortable with

The fist thing I did was write out pseudo for how I could go about achiving what I needed to do. 
I knew how I'd handle te styling and how to add the articles to the DOM but the sorting of the articles is what took time.

The way it works is that it looks at each article of the array:
If the article is three columns wide then it is added to the DOM and thje object is removed from the array
If the article is Two columns wide a 1 column article is searched for, if one is found thy're both displayed andd removed from the array, if one isn't found then the article is stretched to be 3 columns wide
If the article is One column wide then an article two wide is searched for if one is found both are added if not just a one is added.

The HTML is a div with an ID and a class
The CSS involves styling the container for the articles to be added to as a grid of 3 columns, and 3 classes that describe how many columns should be spanned. There's also some basic styling to help visualise what's happening

Downsides:
-This is done clientside so would increase loadtimes
-As this is a universal layout in an actuall production setting it'd make more sense to achive this serverside when the home page is updated rather than having each user's device run the code
-This solution removes the objects from the array, it isn't a problem as it's run client side so the changes aren't saved but if it was server side a slightly different approach would need to be taken
-This solution works for a 3 column wide grid but if at some point the number of columns changes then it would need some re-working
