"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Section } from "@/components/common/Section"
import { Button } from "@/components/ui/button"
import { MdSearch } from "react-icons/md"
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group"
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination"
import { projectData } from "@/constant/project"

export type project_type = {
  link: string
  imageLink: string
  title: string
  category: "web" | "mobile" | "system"
}

export function ProjectSection() {
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState("")
  const [filter, setFilter] = useState("all")
  const itemsPerPage = 3

  // Filter projects by search term and category
  const filteredProjects = projectData.filter((project) => {
    const matchesSearch = project.title.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = filter === "all" || project.category === filter
    return matchesSearch && matchesCategory
  })

  const totalPages = Math.ceil(filteredProjects.length / itemsPerPage)

  const displayedProjects = filteredProjects.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
  )

  // Reset page when search changes 
  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    setPage(1)
  }

  const handleFilterChange = (filterType: string) => {
    setFilter(filterType)
    setPage(1)
  }

  return (
    <Section>
      <div className="container mx-auto px-6">
        {/* Header with title and filters */}
        <div className="flex justify-between items-center mb-8 flex-col lg:flex-row gap-4">
          <div className="font-extrabold text-3xl">Projects Page</div>
          {/* Filter Buttons */}
          <div className="flex gap-2 flex-wrap justify-end">
            <Button 
              variant={filter === "all" ? "default" : "outline"}
              onClick={() => handleFilterChange("all")}
              size="sm"
              className="text-xs"
            >
              All
            </Button>
            <Button 
              variant={filter === "web" ? "default" : "outline"}
              onClick={() => handleFilterChange("web")}
              size="sm"
              className="text-xs"
            >
              Web
            </Button>
            <Button 
              variant={filter === "mobile" ? "default" : "outline"}
              onClick={() => handleFilterChange("mobile")}
              size="sm"
              className="text-xs"
            >
              Mobile
            </Button>
            <Button 
              variant={filter === "system" ? "default" : "outline"}
              onClick={() => handleFilterChange("system")}
              size="sm"
              className="text-xs"
            >
              System
            </Button>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-8">
          <InputGroup>
            <InputGroupInput
              id="project-search"
              placeholder="Search projects..."
              value={search}
              onChange={handleSearchChange} 
            />
            <InputGroupAddon align="inline-start">
              <MdSearch className="text-muted-foreground text-xl" />
            </InputGroupAddon>
          </InputGroup>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-10">
          {displayedProjects.length > 0 ? (
            displayedProjects.map((data, index) => (
              <div key={index} className="group flex flex-col h-full">
                {/* Image Container */}
                <div className="relative w-full h-64 rounded-lg overflow-hidden mb-4 shadow-md hover:shadow-2xl transition-all duration-300">
                  <Image
                    src={data.imageLink}
                    alt={data.title}
                    loading="eager"
                    fill
                    className="object-cover group-hover:scale-110 group-hover:rotate-1 transition-all duration-500 ease-out"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300"></div>
                </div>

                {/* Content */}
                <div className="flex-1 flex flex-col">
                  <h3 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors duration-300">
                    {data.title}
                  </h3>
                  
                  {/* Live Demo Button */}
                  <Link href={data.link} target="_blank" className="mt-auto">
                    <Button 
                      size="sm" 
                      variant="default"
                      className="w-full group-hover:shadow-lg transition-all duration-300 transform group-hover:scale-105"
                    >
                      Live Demo Button
                    </Button>
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center w-full text-muted-foreground col-span-full py-10">
              No projects found
            </p>
          )}
        </div>

        {/* Pagination */}
        {totalPages > 1 && (
          <div className="flex justify-center mt-10">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="cursor-pointer"
                  />
                </PaginationItem>

                {[...Array(totalPages)].map((_, i) => (
                  <PaginationItem key={i}>
                    <PaginationLink
                      isActive={page === i + 1}
                      onClick={() => setPage(i + 1)}
                      className="cursor-pointer"
                    >
                      {i + 1}
                    </PaginationLink>
                  </PaginationItem>
                ))}

                <PaginationItem>
                  <PaginationNext
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    className="cursor-pointer"
                  />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        )}
      </div>
    </Section>
  )
}