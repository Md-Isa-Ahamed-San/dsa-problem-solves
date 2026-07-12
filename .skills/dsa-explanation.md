# CF Problem Explanation Skill (v2) — বিস্তৃত ও Beginner-Friendly Version

এই skill ব্যবহার হবে যেকোনো Codeforces problem (rating ৮০০–১৬০০+ range) explain করার জন্য। লক্ষ্য দুইটা:

1. প্রথমে problem-এর category/tag সঠিকভাবে চিহ্নিত করা
2. এমনভাবে ব্যাখ্যা করা যাতে **সম্পূর্ণ beginner**-ও (যে ওই specific topic/technique আগে কখনো শোনেনি) বুঝতে পারে — কোনো prior knowledge assume করা হবে না

_(v1 থেকে যা বাড়ানো হয়েছে: আরও ৪টা category — Strings, Data Structures, Bitmask, Game Theory — যোগ করা হয়েছে; constraint→technique cheat table, notation glossary, আর beginner-first ground rules নতুন করে যোগ করা হয়েছে; প্রতিটা category-তে "prerequisite primer" আর "common mistakes" section যোগ হয়েছে।)_

---

## Step 0: Beginner-First Ground Rules (সব category তে বাধ্যতামূলক)

এই ৮টা rule প্রতিটা explanation-এ follow করতে হবে, category যাই হোক না কেন:

**0.1 — নতুন term ব্যবহার করলেই সাথে সাথে সংজ্ঞা দাও।**
যেমন "monotonic" শব্দ ব্যবহার করলে সাথে সাথে বলো — "মানে যদি input বাড়ে, output-ও শুধু বাড়ে বা শুধু কমে, এলোমেলো হয় না।"

**0.2 — ধরে নাও reader এই algorithm family সম্পর্কে কিছুই জানে না।**
"DP তো জানোই" এই ধরনের assumption করা যাবে না — প্রতিবার basic থেকে শুরু করে তারপর problem-specific অংশে যাও।

**0.3 — কোনো logical step "obviously" বলে skip করা যাবে না।**
প্রতিটা ছোট step আলাদা করে লিখতে হবে, এমনকি সেটা trivial মনে হলেও।

**0.4 — সবচেয়ে ছোট সম্ভব সংখ্যা/example দিয়ে শুরু করো।**
বড় সংখ্যা/array দিয়ে শুরু করলে pattern দেখা কঠিন হয়ে যায়। 1-2 digit সংখ্যা, 3-5 element array দিয়ে শুরু করো।

**0.5 — যেখানে সম্ভব real-life analogy ব্যবহার করো।**
যেমন stack বোঝাতে "থালার স্তূপ", queue বোঝাতে "লাইনে দাঁড়ানো"।

**0.6 — প্রতিটা section শেষে একটা ছোট "checkpoint" রাখো।**
এক লাইনে জিজ্ঞেস করো বা restate করো, যাতে বোঝা যায় concept-টা ধরা পড়েছে কিনা।

**0.7 — Math notation-এর পাশে সবসময় বাংলা অর্থ লিখো।**
mod (ভাগশেষ), gcd (গরিষ্ঠ সাধারণ গুণনীয়ক), ⌊x⌋ (floor, x এর নিচের সবচেয়ে কাছের পূর্ণসংখ্যা) — এভাবে।

**0.8 — Beginner রা যে ভুল সাধারণত করে, সেটা আগে থেকেই বলে দাও।**
"এখানে অনেকেই ভুল করে এটা ভেবে যে..." — এভাবে pre-empt করে দাও, যাতে একই ভুল না হয়।

---

## Step 1: Category চিহ্নিত করার উপায় (Expanded)

### (A) Constraints থেকে Technique অনুমান

| Constraint (n এর মান) | সম্ভাব্য Technique                                |
| --------------------- | ------------------------------------------------- |
| n ≤ 10–12             | Brute force / সব permutation চেক                  |
| n ≤ 20–22             | Bitmask DP                                        |
| n ≤ 500               | O(n²) বা O(n³)                                    |
| n ≤ 5,000             | O(n²)                                             |
| n ≤ 10⁵–10⁶           | O(n log n) — Sorting, Binary Search, Two Pointers |
| n ≤ 10⁷–10⁸           | O(n) — Linear scan                                |
| n ≤ 10⁹ বা বেশি       | O(√n), O(log n), অথবা সরাসরি Formula/Math         |

**মনে রাখার নিয়ম:** Time limit ১ সেকেন্ড হলে মোটামুটি ১০⁸ operation পর্যন্ত সময়মতো চলে। এইটা দিয়ে reverse-engineer করে বোঝা যায় কোন complexity লাগবে।

### (B) Keyword থেকে Category অনুমান

| Problem-এ যা দেখবে                            | সম্ভাব্য Category             |
| --------------------------------------------- | ----------------------------- |
| "minimum/maximum operations", "smallest way"  | Greedy / Binary Search / DP   |
| "count the number of ways"                    | Combinatorics / DP            |
| divisible, GCD, LCM, prime, remainder         | Number Theory                 |
| "construct/build/find any valid answer"       | Constructive Algorithms       |
| subarray/substring খুঁজতে বলছে                | Two Pointers / Sliding Window |
| graph, tree, connected, path, node, edge      | Graph (DFS/BFS/Union-Find)    |
| palindrome, prefix/suffix, pattern matching   | Strings                       |
| "first player wins", turns, moves alternately | Game Theory                   |
| bracket matching, "next greater element"      | Data Structures (Stack/Queue) |
| n ছোট (≤20), brute force ও না, subset related | Bitmask                       |
| সরাসরি simulate করলেই হয়ে যায়               | Implementation / Ad-hoc       |

**একাধিক tag একসাথে থাকতে পারে** (যেমন Greedy + Sorting, বা DP + Bitmask) — এমন হলে দুইটা category-র approach মিলিয়ে explain করবো।

---

## Step 2: Category-wise Explanation Strategy (Expanded)

### 1. Math / Number Theory

**আগে থেকে যা জানা দরকার:** ভাগশেষ (mod) মানে কী — যেমন 7 ÷ 3 করলে ভাগফল 2, ভাগশেষ 1। GCD মানে দুইটা সংখ্যার সবচেয়ে বড় common factor।

**কী confusion সাধারণত হয়:** কেন একটা formula/property সত্যি, সেটা abstract মনে হয়।

**Explanation approach:**

- ছোট concrete সংখ্যা দিয়ে শুরু (যেমন x=8)
- Modular arithmetic হলে প্রতিটা mod step আলাদা দেখাবো + "কেন এই substitution বৈধ" বলবো
- শেষে হাতে ভাগ করে verify করবো
- Related basics: divisibility rule, modular inverse, prime factorization

**Beginner রা যেসব ভুল করে:**

- mod কে "remainder" না ভেবে formula শুধু মুখস্থ করে ফেলে
- negative number-এর mod নিয়ে confuse হয়

---

### 2. Greedy

**আগে থেকে যা জানা দরকার:** "Greedy" মানে প্রতি step-এ সেই মুহূর্তে সবচেয়ে ভালো মনে হওয়া choice নেওয়া, ভবিষ্যতের কথা চিন্তা না করে।

**কী confusion সাধারণত হয়:** "কেন এই local optimal choice সবসময় global optimal দেয়" — exchange argument ছাড়া বোঝা কঠিন।

**Explanation approach:**

- ছোট counter-example দেখাবো যেখানে naive approach fail করে (যদি থাকে)
- Exchange argument দিয়ে দেখাবো — "optimal solution এই choice না করলে, swap করলে সমান বা ভালো solution পাওয়া যেত"
- Sorting লাগলে, sort-এর পর pattern কেন দেখা যায় সেটা example দিয়ে দেখাবো

**Beginner রা যেসব ভুল করে:**

- মনে করে greedy মানেই "সহজ" — কিন্তু প্রমাণ করা অনেক সময় কঠিন
- ছোট example এ test না করেই সরাসরি কোড লিখে ফেলে

---

### 3. Constructive Algorithms

**আগে থেকে যা জানা দরকার:** এই category-তে optimal কিছু খোঁজা লাগে না — শর্ত পূরণ করে এমন যেকোনো একটা answer বানাতে হয়।

**কী confusion সাধারণত হয়:** "এই answer কোথা থেকে আসলো" — মনে হয় magic trick।

**Explanation approach:**

- প্রথমে target condition কী সেটা স্পষ্ট করবো
- তারপর সেই condition satisfy করার সবচেয়ে controllable উপায় বের করবো (যেমন x#y problem-এ x+y = 10^d−1 বানানো)
- প্রতিটা construction-এর পর edge case (0, boundary) চেক করবো

**Beginner রা যেসব ভুল করে:**

- সরাসরি brute-force করার চেষ্টা করে, বড় constraint-এ কাজ করে না
- Edge case (empty, single element, boundary value) ভুলে যায়

---

### 4. Dynamic Programming (DP)

**আগে থেকে যা জানা দরকার:** DP মানে বড় সমস্যাকে ছোট sub-problem-এ ভেঙে, প্রতিটার answer একবার হিসাব করে save করে রাখা, বারবার হিসাব না করার জন্য।

**কী confusion সাধারণত হয়:** state definition আর transition কোথা থেকে আসলো।

**Explanation approach:**

- ছোট n (n=3, 4) দিয়ে recursion tree বা table হাতে বানাবো
- "state" মানে কী তথ্য মনে রাখতে হবে সেটা explicitly বলবো (dp[i] মানে কী)
- Base case থেকে transition step-by-step দেখাবো, যুক্তিসহ
- Table-এর ভ্যালু হাতে fill করে verify করবো

**Beginner রা যেসব ভুল করে:**

- Base case ভুল সেট করে বা ভুলে যায়
- State-এ পর্যাপ্ত তথ্য রাখে না, ফলে transition ভুল হয়
- Top-down আর bottom-up গুলিয়ে ফেলে

---

### 5. Binary Search

**আগে থেকে যা জানা দরকার:** Binary Search কাজ করে যখন answer-এ monotonic pattern থাকে — x কাজ করলে x+1ও করবে (অথবা উল্টো)।

**কী confusion সাধারণত হয়:** কেন answer-এ monotonicity আছে সেটা বোঝা।

**Explanation approach:**

- প্রথমে monotonic property প্রমাণ করবো
- "check(x)" function আসলে কী verify করছে সেটা আলাদা করে বলবো
- ছোট example এ low, high, mid step by step trace করবো

**Beginner রা যেসব ভুল করে:**

- মনে করে শুধু sorted array-তেই binary search করা যায় (Binary Search on Answer আলাদা concept)
- Off-by-one error (low/high/mid boundary নিয়ে ভুল করে)

---

### 6. Two Pointers / Sliding Window

**আগে থেকে যা জানা দরকার:** দুইটা pointer/index রেখে array-এর একটা "window" track করা, পুরো array বারবার loop না করে।

**কী confusion সাধারণত হয়:** pointer কখন move করবে সেই সিদ্ধান্ত।

**Explanation approach:**

- Concrete array নিয়ে left/right pointer-এর position step by step দেখাবো
- প্রতি step এ "কেন left বাড়ছে" বা "কেন right বাড়ছে" সেটা condition দিয়ে বলবো

**Beginner রা যেসব ভুল করে:**

- Window shrink/expand করার condition ভুল বসায়
- প্রতিটা pointer সর্বোচ্চ n বার move করে বলে পুরো technique-টা linear time — এই complexity reasoning বুঝতে পারে না

---

### 7. Graph (DFS / BFS / Union-Find)

**আগে থেকে যা জানা দরকার:** Graph মানে node আর edge দিয়ে বানানো structure। DFS মানে যতদূর সম্ভব এক পথে গিয়ে ফিরে আসা; BFS মানে layer-by-layer কাছের node আগে visit করা।

**কী confusion সাধারণত হয়:** traversal order, visited tracking, কখন BFS vs DFS।

**Explanation approach:**

- ছোট graph (৫-৬টা node) হাতে এঁকে দেখাবো
- Traversal-এর প্রতিটা step-এ queue/stack/visited set-এর অবস্থা দেখাবো
- BFS vs DFS choice কেন হলো সেটা requirement এর সাথে যুক্ত করে বলবো (shortest path → BFS, শুধু connectivity → যেকোনো একটা)

**Beginner রা যেসব ভুল করে:**

- visited array update করতে ভুলে যায়, ফলে infinite loop হয়
- Directed vs undirected graph গুলিয়ে ফেলে

---

### 8. Combinatorics / Probability

**আগে থেকে যা জানা দরকার:** Combinatorics মানে কতভাবে কিছু সাজানো/বাছাই করা যায় গুনে বের করা।

**কী confusion সাধারণত হয়:** overcounting বা undercounting।

**Explanation approach:**

- ছোট n দিয়ে সব case manually enumerate করবো
- তারপর formula দিয়ে একই সংখ্যা বের করে match করাবো
- Overcounting হলে সেটা কোথায় হচ্ছে specifically দেখাবো (দরকার হলে inclusion-exclusion)

**Beginner রা যেসব ভুল করে:**

- Permutation আর combination গুলিয়ে ফেলে (order matter করে কিনা)
- একই case দুইবার count করে ফেলে না বুঝে

---

### 9. Implementation / Ad-hoc / Brute Force

**আগে থেকে যা জানা দরকার:** এখানে "clever algorithm" লাগে না — problem statement যা বলছে ঠিক সেটাই ধাপে ধাপে code করতে হয়।

**কী confusion সাধারণত হয়:** Edge case miss হওয়া, বা statement ভুল বুঝা।

**Explanation approach:**

- একটা example দিয়ে step-by-step simulate করবো, বিশেষ করে boundary case (empty, single element, max constraint)
- কোন edge case miss হতে পারে সেটা আলাদা করে highlight করবো

**Beginner রা যেসব ভুল করে:**

- Statement তাড়াতাড়ি পড়ে গুরুত্বপূর্ণ শর্ত miss করে
- Edge case test না করেই submit করে

---

### 10. Strings

**আগে থেকে যা জানা দরকার:** String মানে character-এর array, index সাধারণত 0 থেকে শুরু হয়।

**কী confusion সাধারণত হয়:** Pattern matching বা hashing-এর পেছনের গণিত।

**Explanation approach:**

- ছোট string (৩-৫ character) দিয়ে example দেখাবো
- KMP/Z-function হলে প্রথমে naive O(n²) approach দেখাবো, তারপর ধাপে ধাপে সেটা কীভাবে optimize হয় বলবো
- Hashing হলে "কেন দুইটা আলাদা string-এর hash সমান হতে পারে (collision)" এবং সেটা কীভাবে এড়ানো হয় বলবো

**Beginner রা যেসব ভুল করে:**

- 0-indexed vs 1-indexed গুলিয়ে ফেলে
- String comparison-এর সময় জটিলতা ভুলে যায় (O(length) সময় লাগে, O(1) না)

---

### 11. Data Structures (Stack / Queue / Set / Map)

**আগে থেকে যা জানা দরকার:** Stack মানে LIFO (Last In, First Out) — থালার স্তূপের মতো, উপরেরটা আগে সরাতে হয়। Queue মানে FIFO (First In, First Out) — লাইনে দাঁড়ানোর মতো।

**কী confusion সাধারণত হয়:** কখন কোন structure ব্যবহার করতে হবে বুঝতে না পারা।

**Explanation approach:**

- Real-life analogy দিয়ে structure-টা প্রথমে বুঝাবো
- ছোট example এ push/pop বা enqueue/dequeue-এর প্রতিটা step দেখাবো
- "next greater element", bracket matching-এর মতো classic pattern হলে, প্রতিটা element process করার সময় stack-এর ভেতরের অবস্থা দেখাবো

**Beginner রা যেসব ভুল করে:**

- Stack empty অবস্থায় pop করার চেষ্টা করে (runtime error)
- কখন push/pop করবে সেই condition ভুল বসায়

---

### 12. Bitmask

**আগে থেকে যা জানা দরকার:** সংখ্যাকে binary (0/1) আকারে চিন্তা করলে, প্রতিটা bit দিয়ে একটা yes/no অবস্থা represent করা যায় — n-টা item থাকলে কোনগুলো selected সেটা একটা n-bit সংখ্যা দিয়ে বোঝানো যায়।

**কী confusion সাধারণত হয়:** bitwise operator (`&`, `|`, `^`, `<<`, `>>`) গুলো আসলে কী করছে।

**Explanation approach:**

- খুব ছোট n (n=3) দিয়ে সব subset (000 থেকে 111) হাতে লিখে দেখাবো
- প্রতিটা bitwise operation-এর example দেখাবো (যেমন `5 & 3` মানে কী, বাইনারিতে লিখে)
- DP with bitmask হলে, "state" যে আসলে একটা set represent করছে সেটা explicit করে বলবো

**Beginner রা যেসব ভুল করে:**

- `^` কে "power" ভেবে ভুল করে (এটা XOR, power না — Python-এ power হলো `**`)
- bit shift (`<<`, `>>`)-এর effect বুঝতে ভুল করে

---

### 13. Game Theory (Nim / Sprague-Grundy বেসিক)

**আগে থেকে যা জানা দরকার:** দুইজন player পালাক্রমে move দেয়, কোনো move করতে না পারা player হেরে যায় (impartial game)।

**কী confusion সাধারণত হয়:** "winning position" আর "losing position" কীভাবে বের করে।

**Explanation approach:**

- খুব ছোট game state দিয়ে শুরু করবো (যেমন ১-২টা pile নিয়ে Nim)
- Base case (কোনো move নেই = losing) থেকে পিছন থেকে এগিয়ে দেখাবো কোন state winning আর কোনটা losing
- ছোট example থেকে pattern বের করে তারপর general rule বলবো

**Beginner রা যেসব ভুল করে:**

- মনে করে "যে বেশি move করতে পারে সে জেতে" — আসল logic ভিন্ন
- Base case (0 বা empty state) ভুল ধরে

---

## Step 3: Universal Explanation Template (Beginner-Proof Version)

```
1. Category চিহ্নিত করো (constraints + keywords থেকে, Step 1 অনুযায়ী)
2. Prerequisite concept থাকলে সেটা প্রথমে ২-৩ লাইনে সংজ্ঞা দিয়ে শুরু করো
   (ধরে নাও reader প্রথমবার শুনছে)
3. সবচেয়ে ছোট concrete example নাও (abstract variable না, ছোট সংখ্যা/array)
4. প্রতিটা logical step আলাদা করে দেখাও + প্রতি step এ "কেন" প্রশ্নের উত্তর দাও
   ("obviously" শব্দ ব্যবহার নিষেধ)
5. Category-specific common confusion আগেই address করো
6. Numeric ভাবে verify করো (হাতে check করে দেখাও সমাধান সঠিক)
7. Beginner রা এখানে যে ভুল করে সেটা আলাদা করে বলো
8. এক লাইনে মূল pattern/trick সারমর্ম করো (future problem চেনার জন্য)
9. ছোট checkpoint প্রশ্ন দাও, যাতে বোঝা যায় concept ধরা পড়েছে কিনা
```

---

## Notation Glossary (Absolute Beginner-দের জন্য)

| Notation                   | অর্থ                                                               |
| -------------------------- | ------------------------------------------------------------------ |
| `mod` বা `%`               | ভাগশেষ (ভাগ করার পর যা অবশিষ্ট থাকে)                               |
| `gcd(a, b)`                | গরিষ্ঠ সাধারণ গুণনীয়ক (সবচেয়ে বড় common factor)                 |
| `lcm(a, b)`                | লঘিষ্ঠ সাধারণ গুণিতক (সবচেয়ে ছোট common multiple)                 |
| `⌊x⌋` (floor)              | x-এর সমান বা তার চেয়ে ছোট সবচেয়ে কাছের পূর্ণসংখ্যা               |
| `⌈x⌉` (ceil)               | x-এর সমান বা তার চেয়ে বড় সবচেয়ে কাছের পূর্ণসংখ্যা               |
| `a ≡ b (mod n)`            | a আর b-কে n দিয়ে ভাগ করলে একই ভাগশেষ পাওয়া যায়                  |
| `O(n)`, `O(log n)`         | Algorithm input বাড়লে কতটা ধীর হবে তার প্রায় হিসাব (Big-O)       |
| `&`, `\|`, `^`, `<<`, `>>` | Bitwise AND, OR, XOR, left shift, right shift (power/exponent না!) |
| `n!` (factorial)           | 1 থেকে n পর্যন্ত সব সংখ্যার গুণফল                                  |

---

## কীভাবে prompt দিবে

**Category জানা থাকলে:**

> "এই problem-টা [category] — সম্পূর্ণ beginner ধরে নিয়ে concrete example দিয়ে step-by-step বাংলায় বুঝিয়ে দাও।"

**Category জানা না থাকলে:**

> "এই problem-টার category কী সেটা প্রথমে বলো (constraints আর keyword দেখে), তারপর সেই category অনুযায়ী beginner-friendly explanation দাও।"

**একাধিক category থাকলে:**

> "এইটাতে মনে হচ্ছে [category ১] আর [category ২] দুইটাই আছে — দুইটার approach মিলিয়ে বুঝিয়ে দাও।"

---

## সংক্ষেপে

এই skill-এর মূল ভিত্তি তিনটা জিনিসের উপর:

1. **সঠিক category চিহ্নিত করা** (constraints + keyword থেকে)
2. **Category-specific pitfall আগে থেকে জানা এবং address করা**
3. **কোনো prior knowledge assume না করে, ছোট concrete example আর "কেন" প্রশ্নের উত্তর দিয়ে ধাপে ধাপে explain করা**
