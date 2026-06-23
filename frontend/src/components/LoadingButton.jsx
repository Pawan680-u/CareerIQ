export default function LoadingButton({ loading, children, className = "", ...props }) {
  return (
    <button className={`btn-primary ${className}`} disabled={loading || props.disabled} {...props}>
      {loading ? "Processing..." : children}
    </button>
  );
}
