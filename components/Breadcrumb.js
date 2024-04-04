
import Link from 'next/link';

const Breadcrumb = ({ items }) => {
  return (
    <div className='breadcrumb fs12 tac'>
      {items.map((item, index) => (
        <span key={item.slug}>
          {index > 0 && ' / '}
          {item.url ? (
            <Link href={item.url}>
              <span>{item.name}</span>
            </Link>
          ) : (
            <span>{item.name}</span>
          )}
        </span>
      ))}
    </div>
  );
};

export default Breadcrumb;
