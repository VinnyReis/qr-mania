interface SurfaceProps {
  children?: React.ReactElement | React.ReactElement[];
  className?: string;
};

function Surface({ children, className }: SurfaceProps){
  return(
    <div className={`bg-white p-3 border border-slate-200 rounded-md shadow-sm ${className}`}>
      {children}
    </div>
  )
};
export default Surface;