"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogTitle,
  DialogTrigger,
  DialogContent,
  DialogDescription,
  DialogHeader,
} from "@/components/ui/dialog";
import { CirclePlus } from "lucide-react";
import { useState } from "react";
import { FormCreateCustomer } from "../FormCreateCustomer";

export function HeaderCompanies() {
  const [openModalCreate, setOpenModelCreate] = useState(false);
  return (
    <div className="flex items-center justify-between">
      <h2 className="text-2xl">List of companies</h2>

      <Dialog open={openModalCreate} onOpenChange={setOpenModelCreate}>
        <DialogTrigger asChild>
          <Button>Create Company</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[625px]">
          <DialogHeader>
            <DialogTitle>Create Customer</DialogTitle>
            <DialogDescription>
              Create and configure your customer
            </DialogDescription>
          </DialogHeader>

          <FormCreateCustomer setOpenModalCreate={setOpenModelCreate} />
        </DialogContent>
      </Dialog>
    </div>
  );
}
