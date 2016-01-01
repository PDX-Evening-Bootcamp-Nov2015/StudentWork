## Logical && + ||

The logical AND (&&) and logical OR (||) operators evaluate boolean expressions,
such as those created with <, >, or ===.

```javascript
3 < 4; // true
3 === 2 // false
```
For an && expression to return to true, BOTH arguments to && must evaluate to true.
(If either is false, it returns false.)

```javascript
true && true;
3 < 4 && 4 < 5; // -> true

true && false;
3 === 3 && 4 + 1 === 100; // -> false

false && true;
3 !== 3 && 4 < 5; // -> false
```

An || expression returns true if either one of its arguments are true:
If both are false, it returns false.

```javascript
true || true; // -> true
true || false; // -> true
false || true; // -> true
false || false; // -> false
```
**Short-circuit Evaluation**
What's actually happening: arguments are evaluated from left to right, and if the condition
can provide enough information to get the answer, there's no need to evaluate the
second argument. **The last evaluated argument is what gets returned.**

`false &&` anything returns `false`.

There's no point in continuing because they cannot both be true.

`true ||` anything returns `true`.

There's no point in continuing because at least one is true.

These operators can also handle "truthy" and "falsy" values.

```javascript
/* FALSY values */
false; // no surprise here
0; // zero
""; // empty strings
undefined; // special JS 'bottom values'
null;
NaN; // not a number
```

All other values are truthy, including `true`, non-zero numbers, "0", "false", and any other non-empty string, empty arrays, empty objects, and empty functions.

A boolean expression evaluates to true or false, so if an expression is the last
evaluated argument, that _result_ is what gets returned.

```javascript
var a = 3 < 4 || something truthy; // -> true
var b = 3 < 4 || something falsy;  // -> true
```

In the above example, the || only evaluates the first argument, which evaluates to true,
so it returns true in both cases (both `a` and `b` will be true).

In the case of truthy and falsy values, the **given value** of the last evaluated argument
is what gets returned, **not the boolean equivalent**.

```javascript
var a = 5 || something truthy; // -> 5
var b = "hi" || something falsy; // -> "hi"
var c = false || "I'm evaluated"; // -> "I'm evaluated"
var d = 0 || 3 === 4; // -> false
var e = undefined || 5; // -> 5
```

With `a` and `b`, the || short-circuits and the first argument is returned. With `c`, `d`, and `e`, the first arguments are falsy, so the second arguments are evaluated. In the case of `d`, the final _expression_ evaluates to false, so || returns that.
This short-circuiting behavior is often used to set default values for something we expect to be truthy.
Consider a simple function that expects one parameter:

```javascript
function greet(name) {
  console.log("Hello " + name);
}
```

If we call the function with an argument, it behaves how we'd expect:
