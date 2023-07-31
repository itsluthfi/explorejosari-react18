import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/react';

export default function Breadcrumbs({ link, page }) {
  return (
    <div className="w-full bg-white text-hijau">
      <div className="px-[50px] md:px-[100px] lg:px-[100px] xl:px-[200px] mx-auto flex justify-between items-center h-full">
        <Breadcrumb className="w-full rounded-md bg-neutral-100 px-5 py-3 text-[#709A08]">
          <BreadcrumbItem>
            <BreadcrumbLink href="/">
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M20.8332 20.8333C20.8332 21.1096 20.7234 21.3745 20.5281 21.5699C20.3327 21.7653 20.0678 21.875 19.7915 21.875H5.20817C4.9319 21.875 4.66695 21.7653 4.4716 21.5699C4.27625 21.3745 4.1665 21.1096 4.1665 20.8333V11.4583H1.0415L11.7988 1.67916C11.9906 1.50466 12.2405 1.40796 12.4998 1.40796C12.7591 1.40796 13.0091 1.50466 13.2009 1.67916L23.9582 11.4583H20.8332V20.8333ZM8.33317 15.625V17.7083H16.6665V15.625H8.33317Z"
                  fill="#709A08"
                />
              </svg>
            </BreadcrumbLink>
          </BreadcrumbItem>

          <BreadcrumbItem>
            <BreadcrumbLink href={link}>{page}</BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
      </div>
    </div>
  );
}
