const stack = require('../src/stack');

test('peek on empty stack returns undefined', () => {
    expect(stack.peek()).toBeUndefined();
});

test('peek on stack with one element returns that element', () => {
    stack.push(1);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(1);
});

test('peek on stack with two or more elements returns the top element', () => {
    stack.push(1);
    stack.push("wow");
    stack.push(42);
    expect(stack.peek()).toBeDefined();
    expect(stack.peek()).toBe(42);
});

test('Test to check consistency after several attempts ', () => {
    while (stack.peek() !== undefined) {
        stack.pop();
    }
    stack.push(1);
    stack.push("string");
    stack.push({ objKey: 'objValue' });
    stack.push(true);
    expect(stack.peek()).toBe(true);
    stack.pop(); 
    expect(stack.peek()).toEqual({ objKey: 'objValue' });
    stack.pop(); 
    expect(stack.peek()).toBe("string");
    stack.pop();  
    expect(stack.peek()).toBe(1);
    stack.pop();
    expect(stack.peek()).toBeUndefined();
});

