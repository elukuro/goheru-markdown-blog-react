---
title: "This is wierd"
date: "18 September 2021"
---

I read 'decoding javascript' a few days ago, this book is explaining about javascript very deep, and I found out something strange happen with string operation logic, here what I mean 

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
// output 0

'1'-'1'/2
// output 0.5

// It's correct , but why ? 

```

