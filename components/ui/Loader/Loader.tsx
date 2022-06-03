import { ImSpinner2 } from 'react-icons/im';

interface LoaderProps {
  color: string;
}

const Loader = ({ color = 'black' }: LoaderProps) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-3">
      <ImSpinner2
        fill={color}
        className="mr-2 mb-12 inline h-10 w-10 md:h-24 md:w-24 animate-spin text-transparent lg:h-32 lg:w-32"
      />
    </div>
  );
};

export default Loader;
