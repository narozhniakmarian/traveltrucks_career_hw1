import Rating from 'react-rating';

export function StarRating() {
    return (
        <Rating
            initialRating={4}
            emptySymbol={<span style={{ color: '#ccc' }}>★</span>}
            fullSymbol={<span style={{ color: '#FFD700' }}>★</span>}
            readonly
        />
    );
}