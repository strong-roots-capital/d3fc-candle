/**
 * d3fc-candle
 * Interface for d3fc candle data
 */


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

export default Candle
