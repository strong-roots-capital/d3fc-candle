
d3fc-candle [![Build status](https://travis-ci.org/strong-roots-capital/d3fc-candle.svg?branch=master)](https://travis-ci.org/strong-roots-capital/d3fc-candle) [![npm version](https://img.shields.io/npm/v/d3fc-candle.svg)](https://npmjs.org/package/d3fc-candle)
=====================================================================================================================================================================================================================================================================

> Interface for d3fc candle data

Install
-------

```shell
npm install d3fc-candle
```

Use
---

```typescript
import Candle from 'd3fc-candle'
```

The `Candle` interface is defined as

```typescript
/**
 * An atomic unit of d3fc financial time-series data.
 *
 * This interface was extracted from
 * https://github.com/d3fc/d3fc/tree/master/packages/d3fc-random-data
 */
interface Candle {
    /**
     * Date of Candle open.
     */
    date: Date,
    /**
     * Opening value of Candle.
     */
    open: number,
    /**
     * Highest value observed during Candle.
     */
    high: number,
    /**
     * Lowest value observed during Candle.
     */
    low: number
    /**
     * Closing value of Candle.
     */
    close: number,
    /**
     * Volume observed in Candle.
     */
    volume: number
}
```

Related
-------

*   [d3fc](https://github.com/d3fc/d3fc)

## Index

---

