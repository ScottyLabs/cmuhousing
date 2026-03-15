"use client";

export default function NavbarSpacer({
    left_nbr_path,
    right_nbr_path,
    pathname
}: {
    left_nbr_path: string;
    right_nbr_path: string;
    pathname: string;
}) {
    return (
        <div className="flex h-[47px] w-[9px] items-center justify-center">
            <div
                className={`h-[18px] w-[0px] border-black/20 border-1 rounded-full
                                ${pathname === left_nbr_path || pathname === right_nbr_path ? "hidden" : ""}`}
            />
        </div>
    );
}
