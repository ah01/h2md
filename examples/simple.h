// simple c header

/**
 * # Calculator functions 
 * 
 * This is simple c header file for fictive calculator
 */

/**
 * ## Functions
 */

/** (add)
 * Add two numbers together
 * 
 * # Parameters
 * 
 * - `a` - first number
 * - `b` - second number
 * 
 * # Return
 * 
 * Return addition of number `a` and `b`
 */
int add(int a, int b);

/** (sub)
 * Substract two numbers
 * 
 * # Parameters
 * 
 * - `a` - first number
 * - `b` - second number
 * 
 * # Return
 * 
 * Return subtraction of number `a` and `b`
 */
int sub(int a, int b);

/** 
 * ## Global variables
 */

/**
 * Global variable that contains last successful result of [add](#add) or [sub](#sub) functions.
 */
extern int ans;
