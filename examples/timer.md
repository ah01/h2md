# Timer

```cpp
class Timer
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


## Type definition

### typedef unsigned long time_ms

```cpp
typedef unsigned long time_ms
```

Type of time in miliseconds

## Constructors

### 💡 Timer(time_ms interval, bool autostop = false)

```cpp
Timer(time_ms interval, bool autostop = false)
```

Create new timer instance with defined interval

#### Parameters

- `interval` - interval time (in miliseconds)
- `autostop` - indicate if timer should stop after each elapsed

#### Example
```cpp
Timer mytimer(5000); // New timer for 5 sec.
```

## Methods

### Ⓜ️ bool elapsed()

```cpp
bool elapsed()
```

Check if set interval elapsed

#### Return

Return `true` if interval epalsed othervise `false`


### Ⓜ️ void restart()

```cpp
void restart()
```

Restart timer form begining

### Ⓜ️ void restart(time_ms interval)

```cpp
void restart(time_ms interval)
```

Restart timer form begining and change interval

#### Parametry:

- `interval` - interval time (in miliseconds)

## Attributes

### 🔧 time_ms interval

```cpp
time_ms interval
```

Timers interval (in miliseconds)
