---
title: "This is wierd"
date: "18 September 2021"
---

I read 'decoding javascript' a few days ago, this book explaining javascript deeply and I found out something strange happen with string operation logic, here what I mean 

```

'A'+'A'
// output 'AA'

'1'+'1'
// output '11'

// Okay that make sense but ...

'1'+'1'*2
// output 12 


'1'+'1'/2
// output 10.5

// It's wierd then ....


'1'-'1' 
// output 0 , it's correct but why ? 

'1'-'1'/2
// output 0.5

```
### Update
I find out the answer here is the breakdown 

```
// '1'+'1'/2 = 12 

// what happen here is first javascript work with divide operator 
'1'/2
// output = 0.5 
// then continue the process with 
'1'+0.5
// output = 10.5

```

