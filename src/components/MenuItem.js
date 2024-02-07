import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imageName, price}) => {
    var fullAltText = "Image of the " + title + " dish.";
    return (
        <div class="row menu-item">
            <div class="col-4">
                <img src={`/images/${imageName}`} alt={fullAltText} class="menu-item-img"/>
            </div>
            <div class="col-8 text-box">
                <div class="row row-flex item-title">{title}</div>
                <div class="row row-flex item-desc">{description}</div>
                <div class="row row-flex price-and-button">
                    <div class="col-6 price">
                        {price}
                    </div>
                    <div class="col-6 button-parent">
                        <button class="add-button">Add</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
