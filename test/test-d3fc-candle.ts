import test from 'ava'

/**
 * Library under test
 */

import Candle from '../src/d3fc-candle'

test('candle is of expected form', t => {
    function returnCandle(): Candle {
        return {
            date: new Date(2018, 0, 1),
            open: 50,
            high: 85,
            low: 25,
            close: 75,
            volume: 974
        }
    }
    const candle: Candle = returnCandle()
    t.pass()
})

test('candle can be assigned d3fc example-candles', t => {
    const candle: Candle = {
        date: new Date('2016-01-01T00:00:00.000Z'),
        open: 100,
        high: 100.37497903455065,
        low: 99.9344064016257,
        close: 100.13532170178823,
        volume: 974
    }
    t.pass()
})
