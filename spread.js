//spread syntax with arrays

describe('Spread syntax with arrays', () => {
    describe('basically', () => {
      it('expands the items of an array by prefixing it with `...`', function() {
        const middle = [1, 2, 3];
        const arr = [0,...middle,4];
        assert.deepEqual(arr, [0, 1, 2, 3, 4]);
      });
      it('an empty array expanded is no item', function() {
        const arr = [0, 1];
        assert.deepEqual(arr, [0, 1]);
      });
    });
    describe('is (in a way) the opposite to the rest syntax', function() {
      it('both use `...` to either expand all items and collect them', function() {
        const [...rest] = [1, 2, 3, 4, 5];
        assert.deepEqual(rest, [1, 2, 3, 4, 5]);
      });
      it('rest syntax must be last in an array, spread can be used in any place', function() {
        const [a, [b], ...rest] = [1, [2],3, 4, 5];
        assert.equal(a, 1);
        assert.equal(b, 2);
        assert.deepEqual(rest, [3, 4, 5]);
      });
    });
    describe('used as function parameter', () => {
      it('prefix with `...` to spread as function params', function() {
        const magicNumbers = [1, 2];
        const fn = ([magicA, magicB]) => {
          assert.deepEqual(magicA, magicNumbers[0]);
          assert.deepEqual(magicB, magicNumbers[1]);
        };
        fn(magicNumbers);
      });
      it('pass an array of numbers to Math.max()', function() {
        const max = Math.max(...[23, 0, 42]);
        assert.equal(max, 42);
      });
    });  
    describe('used as constructor parameter', () => {
      it('just like in a function call (is not possible using `apply`)', () => {
        class X {
          constructor(a, b, c) { return [a, b, c]; }
        }
        const args = [1,2,3];
        assert.deepEqual(new X(...args), [1, 2, 3]);
      });
    });
  });

  //spread with string

  describe('Spread syntax with strings', () => {
    it('expands each character of a string by prefixing it with `...`', function() {
      const [a, b] = [...'ab'];
      assert.equal(a, 'a');
      assert.equal(b, 'b');
    });
    it('expands any kind of character', function() {
      const arr = [...'1 ☢ 2'];
      assert.deepEqual(arr, ['1', ' ', '☢', ' ', '2']);
    });
    it('works anywhere inside an array (must not be last)', function() {
      const letters = ['a', ...'bcd', 'e', 'f'];
      assert.equal(letters.length, 6);
    });
    it('don`t confuse with the rest operator', function() {
      const [...rest] = [...'12345'];
      assert.deepEqual(rest, [1, 2, 3, 4, 5]);
    });
    it('can also be used as function parameter', function() {
      const max = Math.max(...'12345');
      assert.deepEqual(max, 5);
    });
  });