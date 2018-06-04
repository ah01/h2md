> This document was generated from file `timer.h` at 2018-6-4 22:04:29
<a name="line-4"></a>
# Timer

```cpp
class Timer /* line 30 */
```

Simple and easy to use timer library

#### Description

#### Example

Hallo World example (blinking LED)

```cpp
#include <Timer.h>

Timer timer(1000);

void setup() {
  pinMode(LED, OUTPUT);
}

void loop() {
  if (timer.elapsed()) {
    digitalWrite(LED, ! digitalRead(LED)); // toggle LED
  }
}
```


<a name="line-34"></a>
## Type definition

<a name="line-38"></a>
### typedef unsigned long time_ms

```cpp
typedef unsigned long time_ms /* line 41 */
```

Type of time in miliseconds

<a name="line-43"></a>
## Constructors

<a name="line-47"></a>
### 💡 Timer(time_ms interval, bool autostop = false)

```cpp
Timer(time_ms interval, bool autostop = false) /* line 60 */
```

Create new timer instance with defined interval

#### Parameters

- `interval` - interval time (in miliseconds)
- `autostop` - indicate if timer should stop after each elapsed

#### Example
```cpp
Timer mytimer(5000); // New timer for 5 sec.
```

<a name="line-62"></a>
## Methods

<a name="line-66"></a>
### Ⓜ️ bool elapsed()

```cpp
bool elapsed() /* line 74 */
```

Check if set interval elapsed

#### Return

Return `true` if interval epalsed othervise `false`


<a name="line-76"></a>
### Ⓜ️ void restart()

```cpp
void restart() /* line 79 */
```

Restart timer form begining

<a name="line-81"></a>
### Ⓜ️ void restart(time_ms interval)

```cpp
void restart(time_ms interval) /* line 88 */
```

Restart timer form begining and change interval

#### Parametry:

- `interval` - interval time (in miliseconds)

<a name="line-90"></a>
## Attributes

<a name="line-94"></a>
### 🔧 time_ms interval

```cpp
time_ms interval /* line 97 */
```

Timers interval (in miliseconds)
