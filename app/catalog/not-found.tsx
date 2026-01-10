import Link from 'next/link';

export default function NotFound() {
    return (
        <div style={{
            padding: '100px 20px',
            textAlign: 'center',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '20px'
        }}>
            <h1 style={{ fontSize: '3rem', color: '#E44848' }}>404</h1>
            <h2 style={{ fontSize: '1.5rem' }}>Camper Not Found</h2>
            <p style={{ fontSize: '1.1rem', color: '#475467' }}>
                We couldn't find the camper you're looking for. It might have been removed or the ID is incorrect.
            </p>
            <Link
                href="/catalog"
                style={{
                    backgroundColor: '#E44848',
                    color: 'white',
                    padding: '12px 28px',
                    borderRadius: '200px',
                    textDecoration: 'none',
                    fontWeight: 500,
                    fontSize: '1rem'
                }}
            >
                Back to Catalog
            </Link>
        </div>
    );
}
