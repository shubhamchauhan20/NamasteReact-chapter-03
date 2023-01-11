# Namaste chapter-03 Laying the Foundation

This README have 3rd assignment of Namaste React .


## FAQ

#### Question 1: What is JSX?

Answer 1: JSX stands for JavaScript XML. JSX allows us to write HTML elements in javascript and place them in the DOM without any createElement() and/or appendChild() methods. JSX makes it easier to write and add HTML in React. JSX converts HTML tags into react elements.

#### Question 2: Superpowers of JSX?

Answer 2: Using JSX, you can write markup inside Javascript, providing you a superpower to write logic and markup of a component inside a single .jsx file. JSX is easy to maintain and debug.

#### Question 3:  Role of type attribute in script tag? What options can I use there?

Answer 3: The type attribut specifies the type of the script. The type attribute identifies the content between the <script> and </script> tags. It has a Default value which is "text/javascript".

type attribute can be of the following types:

-> text/ecmascript : this value indicates that the script is following the EcmaScript standards.
-> module: This value tells the browser that the script is a module that can import or export other files or modules inside it.
-> text/babel : This value indicates that the script is a babel type and required bable to transpiler it.
-> text/typescript: As the name suggest the script is written in TypeScript.

#### Question 4: {TitleComponent} vs {<TitleComponent/>} vs {<TitleComponent></TitleComponent>} in JSX.

Answer 4: The Difference is stated below:

{TitleComponent}: This value describes the TitleComponent as a javascript expression or a variable. The {} can embed a javascript expression or a variable inside it.
<TitleComponent/> : This value represents a Component that is basically returning Some JSX value. In simple terms TitleComponent a function that is returning a JSX value. A component is written inside the {<  />} expression.
<TitleComponent></TitleComponent> : <TitleComponent /> and <TitleComponent></TitleComponent> are equivalent only when < TitleComponent /> has no child components. The opening and closing tags are created to include the child components.

