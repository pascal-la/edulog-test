"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Attachment } from "@/types/attachment";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function AttachmentsPage() {
  async function fetchAttachments() {
    const response = await axios.get("https://localhost:8000/api/attachments", {
      headers: { ...authorizationHeaders },
    });
    setAttachments(response.data["hydra:member"]);
  }

  const [attachments, setAttachments] = useState<Attachment[]>([]);

  useEffect(() => {
    fetchAttachments();
  }, []);

  return (
    <>
      <Title title="Fichiers" />
      <div className="flex gap-6">
        {attachments.map((item) => (
          <Link key={item.id} href={`/attachments/${item.id}`} className="flex">
            <Card clickable>
              <p>{item.originalName}</p>
              <p>{item.size}</p>
            </Card>
          </Link>
        ))}
      </div>
    </>
  );
}
