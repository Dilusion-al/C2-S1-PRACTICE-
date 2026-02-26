export default function Statistic({ results }) {
    const sum = results.reduce((acc, item) => {
        return acc + item.score
    }, 0)

    const length = results.length;

    const average = sum / length;

    const minimun = results.reduce((min, item) => {
        return item.score < min ? item.score : min;
    }, results[0])

    const maximum = results.reduce((max, item) => {
        return item.score > max ? item.score : max;
    }, results[0])

    return (
        <div className="Statistic-Box">
            <p>Average 51 </p>
            <p>Min 33 </p>
            <p>Max 75 </p>
        </div>
    )
}