---
title: "This is weird"
date: "18 September 2021"
---

While reading a book 'Decoding javascript', a book explaining javascript in very deep detail, I came across something very interesting with respect to String operation logic. This is what I mean : 

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

