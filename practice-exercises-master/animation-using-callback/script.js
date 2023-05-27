// Task – 1: Define Function drawBox() to Draw Box



/*
    The function should accept DOM element as the parameter.
    Using DOM methods and properties, the function should create div and 
    provide it with style properties: width, height, border idth and border style
    The div element should be appended to the element passed as parameter
    The function should then return the styled div element.
*/
function drawBox(headerelement) {
    let headerBox=document.createElement("div");
    headerBox.style.width="100vw";
    headerBox.style.height="100px";
    headerBox.style.borderWidth="5px";
    headerBox.style.borderStyle="solid";
    
    headerelement.appendChild(headerBox);
    return headerBox;
}
//const headerBox=drawBox();


// Task 2 – Define Function changeBorderColor() to Change Color of Box Border
/*
    The function should accept DOM element as the parameter whose border color 
    needs to be changed.
    Using DOM methods and properties, the function should style the element with 
    orange color to its border.
    The function should then return the styled div element.
*/
function changeBorderColor(headerelement) {
    headerelement.style.borderColor="orange";

  return headerelement;
    
}
//const headerBoxcolor= changeBorderColor(headerBox);

// Task 3 – Define Function makeBorderRounded to Make Box Corners Rounded
/*
    The function should accept DOM element as the parameter whose border's 
    corners need to be rounded.
    Using DOM methods and properties, the function should style the element with 
    radius of its border set to 15px.
    The function should then return the styled div element.
*/
function makeBorderRounded(headerelement) {
    headerelement.style.borderRadius="15px";
    return headerelement;
}
//const Boxrounded= makeBorderRounded(headerBoxcolor);

// Task 4 – Define Function fillColor() to Fill the Box with a Color
/*
    The function should accept DOM element as the parameter whose background color 
    needs to be changed
    Using DOM methods and properties, the function should style the element with 
    background color cadet blue
    The function should then return the styled div element.
*/
function fillColor(headerelement) {
    headerelement.style.backgroundColor="cadetblue";
    return headerelement;
}

// Task 5 – Define Function displayHeading() to Enter Text in Box
/*
    The function should accept DOM element as the parameter within which text 
    needs to be entered.
    The heading text should be displayed within `h1` element.
    The text to be displayed should be AMC Entertainment.
    The color of the text should be orange and should be centrally aligned.
    The function should then return the div element with the text.
*/
function displayHeading(headerelement) {
    let heading=document.createElement("h1");
    heading.innerHTML="AMC Entertainment";
    heading.style.color="orange";
    heading.style.textAlign="center";
    heading.style.marginTop="20px";
    headerelement.appendChild(heading);
    
    return headerelement;
    
}

// Task 6 - Call Functions to Animate After a Delay
/*
    Create nested structure with calls to setTimeout() method
    Each call to setTimeout() should call another setTimeout() method.
    Each callback of setTimeout() should call the animation method the return from 
    which should be passed to the next animation method.
    Observe the Callback Hell Effect.
*/
setTimeout(()=>{
    let div1=drawBox(document.getElementById('animated-header'));
    setTimeout(()=>{
        let div2=changeBorderColor(div1);
        setTimeout(()=>{
            let div3=makeBorderRounded(div2);
            setTimeout(()=>{
                let div4=fillColor(div3);
                setTimeout(()=>{
                    let div5=displayHeading(div4);
                },3000)
            },2500)
        },2000)
    },1500)                   
    
},1000);