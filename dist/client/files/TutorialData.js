export default function TutorialData() {
    return data
}

const data = {
    title: 'Getting Started with Elemento',
    sections: [
        {
            id: 'intro',
            title: 'Introduction',
            startText: `Congratulations on deciding to dive in to Elemento!
            
            This short guide is intended for complete beginners to programming.  It will take about 5 minutes.
            
            It will take you step-by-step through creating a really simple Elemento app, called Hello You, which just lets you type in your name, and then it says "Hello Alex" (or whatever name you type in).
            
            You will need:  `,
            steps: [
                {text: 'a computer with a good size screen (Full HD 1920 x 1080 is best)'},
                {text: 'an up to date version of the Chrome browser'},
            ],
            endText: `Let's get started - click Next below.`
        },
        {
            id: 'howToUse',
            title: 'How to Use this Tutorial',
            startText: `Click on any section in the list on the left to move around the tutorial, or click the Next button at the end of each section.
            
            Each section contains detailed instructions to complete it.
            
            The "Show Me" links will demonstrate how to do something - but see if you can work it out for yourself first!  
            
            You can undo any changes with Control-Z (Command-Z on Mac) or the Undo option on the Edit menu.
            
            If you are the type who would like to do some background reading, click Help at the top, then Reference, and look for the section called "Getting Started"`,
            steps: [
            ],
        },
        {
            id: 'start',
            title: 'Start the tutorial',
            startText: `To get started, create a new Project to work in.`,
            steps: [
                {
                    text: 'Click the File menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'File']}
                },
                {
                    text: 'Click New',
                    action: {command: 'Click', arguments: ['menuItem', 'New']}
                },
                {
                    text: 'Enter a name for the Project, like \'Getting Started Tutorial\'',
                    action: {command: 'SetValue', arguments: ['id', 'projectName', 'Getting Started Tutorial']}
                },
                {
                    text: 'Click Create',
                    action: {command: 'Click', arguments: ['button', 'Create']}
                }
            ]
        },
        {
            id: 'howItWorks',
            title: 'How Elemento works - in 30 seconds',
            startText: `Elemento lets you create apps by assembling parts like pages, buttons, input boxes and pieces of text.  These are called "elements".
            
                        Each element has properties - settings that control what it looks like and what it does.
                        
                        Property settings can be plain values, like "green" or 20, or they can be formulas.  Formulas are similar to those in a spreadsheet, and they let the app calculate what to show and do as you use it.
                        
                        Now lets see how you set up the elements and their properties.`,
            steps: [
            ],
        },
        {
            id: 'studio_parts',
            title: 'What you can see in the Studio',
            startText: `See if you can find these parts of the Studio:`,
            steps: [
                {
                    text: 'Navigator - the Elements in your app',
                    action: {command: 'Show', arguments: ['treeItem']}
                },
                {
                    text: 'Click on an Element to work on it',
                    action: {command: 'Click', arguments: ['treeItem', 'Main Page']}
                },
                {
                    text: 'Properties panel - the settings for the element you select in the Navigator',
                    action: {command: 'Show', arguments: ['propertiesPanel']}
                },
                {
                    text: 'Preview - the app you are building, running on the page',
                    action: {command: 'Show', arguments: ['main'], target: 'Preview'}
                },
                {
                    text: 'Menu buttons - these let you do the various actions you need, like in most software you have used before',
                    action: {command: 'Show', arguments: ['menuButton']}
                },
                {
                    text: 'Tools window - That\'s this part where you are looking at this tutorial.  It can also show things like Help.',
                },
            ],
            endText: `Right now the app you have created has just a single Page and a title.  In the next section you will start changing it.`,
        },
        {
            id: 'change_title',
            title: 'Step 1 - Change the Title',
            startText: `To get you started, we will do something really simple - change the title of the app.`,
            steps: [
                {
                    text: `Find the Main Page item in the Navigator on the left of the screen.`,
                    action: {command: 'Show', arguments: ['treeItem', 'Main Page']}
                },
                {
                    text: 'Open up the Main Page element by clicking the + to the left',
                    action: {command: 'EnsureTreeItemsExpanded', arguments: ['Main App', 'Main Page']}
                },
                {
                    text: 'Click on the Title element to select it',
                    action: {command: 'Click', arguments: ['treeItem', 'Title']}
                },
                {
                    text: `Find the Content property in the Properties panel.`,
                    action: {command: 'Show', arguments: ['propertyField', 'Content']}
                },
                {
                    text: 'Enter a new value in the Content property (such as "Hello You"), and see the title on the Preview change.',
                    action: {command: 'SetValue', arguments: ['propertyField', 'Content', 'Hello You']}
                },
            ],
            endText: `Now for something more interesting - adding an Element`,
        },
        {
            id: 'add_input_box',
            title: 'Step 2 - Add a box to enter your name',
            startText: `We are going to add an input box where you can type in your name`,
            steps: [
                {
                    text: 'Make sure the Title item is still selected (orange background), and click on it again if not',
                    action: {command: 'Click', arguments: ['treeItem', 'Title']}
                },
                {
                    text: 'Click the Insert menu button at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'Insert']}
                },
                {
                    text: 'Click Text Input on the right of the menu',
                    action: {command: 'Click', arguments: ['menuItem', 'Text Input']}
                },
                {
                    text: 'Click the Name box at the top of the Properties panel',
                    action: {command: 'Click', arguments: ['propertyField', '^Name$']}
                },
                {
                    text: 'Change the Name to the words: "Your Name"',
                    action: {command: 'SetValue', arguments: ['propertyField', '^Name$', 'Your Name']}
                },
                {
                    text: 'Press Enter to confirm the name change',
                    action: {command: 'Click', arguments: ['propertyField', '^Notes$']}
                },
            ],
            endText: `You should now see an input box in the Preview called "Your Name"`,
        },
        {
            id: 'display_message',
            title: 'Step 3 - Display the message',
            startText: `In this step, you are going to add a line of text with the Hello greeting.  
            It uses a simple formula to make the message.`,
            steps: [
                {
                    text: 'Make sure the "Your Name" item is still selected in the Navigator, and click on it again if not',
                    action: {command: 'Click', arguments: ['treeItem', 'Your Name']}
                },
                {
                    text: 'Click the Insert menu at the top',
                    action: {command: 'Click', arguments: ['menuButton', 'Insert']}
                },
                {
                    text: 'Click Text on the right of the menu',
                    action: {command: 'Click', arguments: ['menuItem', '^Text$']}
                },
                {
                    text: `Click the ABC button to the left of the Content box at the top of the Properties panel.
                        It should change to FX= (for a Formula).  Don't worry about the red error message.`,
                    action: {command: 'Click', arguments: ['propertyTypeButton', 'Content']}
                },
                {
                    text: `Change the Content formula to exactly what is on the next line:
                            'Hello there, ' + YourName`,
                    action: {command: 'SetValue', arguments: ['propertyField', 'Content', `'Hello there, ' + YourName`]}
                },
                {
                    text: `Type something in the Your Name box on the Preview, and watch the greeting below change as you type`,
                    action: {command: 'SetValue', arguments: ['YourName', 'Alexandra'], target: 'Preview'}
                },
            ],
        },
        {
            id: 'finish',
            title: 'You\'ve got there!',
            startText: `Congratulations - you have built your first app with Elemento!  It doesn\\'t do very much, but it is a complete working program.

                        This tutorial was intended to give you a flavour of using Elemento, without too much explanation.  Other tutorials will go deeper into why you were doing each step.
                        
                        If you would like to, please play around with any of the elements and properties, just to see what happens.
                        
                        More tutorials and examples will appear regularly to help you improve your skills with Elemento. You can also explore the Help to find a detailed explanation of anything you need to know. 
                        
                        Thanks for trying Elemento - enjoy the rest of your journey!`,
            steps: [
            ],
            endText: ``,
        },
    ]
}