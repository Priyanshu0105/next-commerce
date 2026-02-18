import React from "react"
import Link from "next/link"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { ChevronRight } from "lucide-react"

interface BreadCrumbProps {
  categoryPath: string[]
}

const BASE_PATH = "/c"

const BreadCrumb = ({ categoryPath }: BreadCrumbProps) => {
  return (
    <div
      className="
        w-fit rounded-xl
        border border-zinc-200/50 dark:border-zinc-800/60
        bg-white/70 dark:bg-zinc-900/60
        backdrop-blur-md
        px-4 py-2
        shadow-lg
      "
    >
      <Breadcrumb>
        <BreadcrumbList className="text-sm text-zinc-600 dark:text-zinc-400">
          {/* Home */}
          <BreadcrumbItem>
            <BreadcrumbLink asChild>
              <Link
                href="/"
                className="
                  font-medium
                  text-zinc-900 dark:text-zinc-100
                  hover:text-primary
                  transition-colors
                "
              >
                Home
              </Link>
            </BreadcrumbLink>
          </BreadcrumbItem>

          {categoryPath.map((category, index) => {
            const isLast = index === categoryPath.length - 1
            const href = `${BASE_PATH}/${categoryPath
              .slice(0, index + 1)
              .join("/")}`

            return (
              <React.Fragment key={index}>
                <BreadcrumbSeparator>
                  <ChevronRight className="h-4 w-4 opacity-60 dark:opacity-50" />
                </BreadcrumbSeparator>

                <BreadcrumbItem>
                  {isLast ? (
                    <BreadcrumbPage
                      className="
                        font-semibold capitalize
                        text-zinc-900 dark:text-zinc-100
                      "
                    >
                      {category}
                    </BreadcrumbPage>
                  ) : (
                    <BreadcrumbLink asChild>
                      <Link
                        href={href}
                        className="
                          capitalize
                          text-zinc-700 dark:text-zinc-300
                          hover:text-primary
                          transition-colors
                        "
                      >
                        {category}
                      </Link>
                    </BreadcrumbLink>
                  )}
                </BreadcrumbItem>
              </React.Fragment>
            )
          })}
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  )
}

export default BreadCrumb
