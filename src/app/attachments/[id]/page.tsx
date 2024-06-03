"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";

import { Attachment } from "@/types/attachment";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

import Card from "@/components/ui/Card";
import Title from "@/components/ui/Title";

export default function AttachmentDetails({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [attachment, setAttachment] = useState<Attachment>();

  useEffect(() => {
    async function fetchAttachment() {
      const response = await axios.get(
        `https://localhost:8000/api/attachments/${id}`,
        { headers: { ...authorizationHeaders } }
      );
      setAttachment(response.data);
    }
    fetchAttachment();
  }, [id]);

  return (
    <>
      <Title title={attachment?.originalName} />
      <div className="flex">
        <Card>
          <div className="grid gap-5">
            <p>Nom du fichier: {attachment?.originalName}</p>
            <p>Taille: {attachment?.size}</p>
            <p>{attachment?.id}</p>
          </div>
        </Card>
      </div>
    </>
  );
}
