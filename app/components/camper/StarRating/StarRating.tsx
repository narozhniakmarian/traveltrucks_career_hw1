interface Props {
    rating: number;
}

export function StarRating({ rating }: Props) {
    const fullStars = Math.floor(rating);

    return (
        <div style={{ display: 'flex', gap: '4px' }}>
            {[1, 2, 3, 4, 5].map((star) => (
                <svg
                    key={star}
                    width="16"
                    height="16"
                    style={{
                        fill: star <= fullStars ? '#FFC531' : '#F2F4F7'
                    }}
                >
                    <use href="/svg/svg_spit.svg#icon-rating" />
                </svg>
            ))}
        </div>
    );
}