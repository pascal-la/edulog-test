"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import { authorizationHeaders } from "@/utils/authorizationHeaders";

export default function AttachmentGetFile({
  params,
}: {
  params: { id: string };
}) {
  const { id } = params;

  const [attachment, setAttachment] = useState();

  useEffect(() => {
    async function fetchAttachment() {
      const response = await axios.get(
        `https://localhost:8000/api/attachments/${id}/get-file`,
        { headers: { ...authorizationHeaders } }
      );
      console.log(response.status);
      setAttachment(response.data);
    }
    fetchAttachment();
  }, [id]);

  return (
    <div>
      <p>{attachment}</p>
    </div>
  );
}
