export default function Loading() {
  return (
    <div className="min-h-screen bg-[#0d0d0f] flex items-center justify-center">
      <div className="flex flex-col items-center gap-4">
        <div className="w-8 h-8 border-2 border-[#c8f06e]/20 border-t-[#c8f06e] rounded-full animate-spin" />
        <span className="text-sm text-[#555558] tracking-widest uppercase">
          Loading
        </span>
      </div>
    </div>
  );
}
