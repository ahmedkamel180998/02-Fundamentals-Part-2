Here’s a detailed summary of the transcript:

---

The instructor, Jonas, starts by reviewing the previous lecture, which covered the food processor function. He then introduces different ways of writing functions in JavaScript, explaining that while they work slightly differently, they are still similar in nature.

### **Function Declarations**

Jonas first explains **function declarations**, which use the `function` keyword to declare a function, similar to declaring a variable. He demonstrates this by writing a function called `calcAge1`, which calculates a person's age based on a given birth year.

1. The function takes a **birth year** as a parameter.
2. It calculates the age using `2037 - birthYear`.
3. It returns the calculated age.
4. The function is then called using `calcAge1(1991)`, where `1991` is the **argument** passed to the function.
5. The returned value is stored in a variable `age1`, and its result (46) is logged to the console.

He clarifies the difference between **parameters** (placeholders in function definitions) and **arguments** (actual values passed when calling the function).

### **Function Expressions**

Next, Jonas introduces **function expressions**, which differ from declarations because they involve assigning a function to a variable.

1. Instead of naming the function directly, an **anonymous function** is created and stored in a variable called `calcAge2`.
2. The function body remains the same as `calcAge1`, calculating the age based on the birth year.
3. The function is then invoked using `calcAge2(1991)`, and its result is stored in `age2`.
4. The output (46) is logged to the console, confirming that function expressions work the same way as function declarations.

Jonas emphasizes that function expressions **produce values** and are therefore treated like variables. He explains that, in JavaScript, functions are not types (like numbers or strings) but **values** that can be stored in variables.

### **Key Differences Between Function Declarations and Expressions**

1. **Hoisting**:

   - Function **declarations** can be called before they are defined in the code.
   - Function **expressions** cannot be called before they are defined; doing so results in an error.

2. **Preferred Usage**:
   - Jonas prefers function expressions because they enforce a structured approach, ensuring all functions are defined before they are called.
   - Some developers prefer function declarations, and both approaches are valid.

### **Final Takeaways**

Jonas concludes by stating that while developers may have a preference for function declarations or expressions, **both must be understood and used when necessary**. Certain situations will require one format over the other, making it essential to be comfortable with both.
