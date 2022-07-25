1. unoptimized branch:

1. try adding employee from any of inputs you will notice delay (why delay in input?)

1. We can see why its so slow?

1. Using performance Tab:

1 Start the performance measurement & start typing in input, and then you can take a look in summary, we spend a lot of time
  scripting

2. If we take a look in bottom up tab, we can see what functions are frequently called,or where we spend a lot of time.

3. We can see we our most of time goes on getSalary function (fibonacci), but why its getting called so many times?

2. Angular Devtools

We can also use Angular Devtools to take a look for which components change detection is getting triggered?

So what is happening here is , whenever we enter a input, angular runs change detection (bcoz of dom events(Async)), and since we have a template expression which shows salary for a engineer , its getting called for every employee everytime change detection runs, & thats computationally expensive. So we are unnecesserially calling getSalary function too many times?

Problem is Angular can't know if the return value of function will be same or not so it ends up calling it again & again for no reason.

We can make use of pure pipes here!


Lets optimize step by step

First step => We will implement onPush Change Detection Strategy =>
Because what happens is when we type in frontend section , it runs change detection for both frontend & backend lists =>
One thing is for sure when we are interacting with frontend section we dont want backend to be checked.
Since we have instances of engineer-list components => we can use immutables library to create new references on changes (efficiently) & we use 
onPush, so angular runs only in one section where interaction is happening!

Results=>

1. Performance Tab & Angular devtools you can compare results for both with & without onPush for engineer-list!

After doing above, we are able to skip the whole section but still we are recalculating the salaries of all employees, when we are typing 
because input & list are in the same component , what we can do is we can create 2 sub components 
1 for input
2 for list and we can use onPush for both components thus when ever there is some change in input and that doesn't affect list
we don't run change detection for list, we only check list when we add new engineer


