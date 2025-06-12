
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

const RoadmapSlide = () => {
  return (
    <div className="space-y-6 max-w-5xl mx-auto">
      <Table className="bg-white rounded-lg overflow-hidden border border-[#D6C2E5]/30">
        <TableHeader>
          <TableRow className="bg-[#2E003E] hover:bg-[#2E003E]">
            <TableHead className="text-white font-plus-jakarta font-bold">Tier</TableHead>
            <TableHead className="text-white font-plus-jakarta font-bold">Date Band</TableHead>
            <TableHead className="text-white font-plus-jakarta font-bold">Feature Drops</TableHead>
            <TableHead className="text-white font-plus-jakarta font-bold">Clinic Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow className="border-b border-[#D6C2E5]/20">
            <TableCell className="font-plus-jakarta font-bold text-[#2E003E]">Launch</TableCell>
            <TableCell className="text-[#D6C2E5] font-bold">Aug 25 → Dec 25</TableCell>
            <TableCell className="text-sm">Eligibility + PA-Flag, Doc Checklist + One-Click Packet</TableCell>
            <TableCell className="text-sm text-gray-700">Cancel wasted PAs, end missing-doc denials</TableCell>
          </TableRow>
          <TableRow className="border-b border-[#D6C2E5]/20">
            <TableCell className="font-plus-jakarta font-bold text-[#2E003E]">Build Data</TableCell>
            <TableCell className="text-[#D6C2E5] font-bold">Jun 26</TableCell>
            <TableCell className="text-sm">Rule-Table Expansion</TableCell>
            <TableCell className="text-sm text-gray-700">&gt;97% decision accuracy</TableCell>
          </TableRow>
          <TableRow className="border-b border-[#D6C2E5]/20">
            <TableCell className="font-plus-jakarta font-bold text-[#2E003E]">Capture Evidence</TableCell>
            <TableCell className="text-[#D6C2E5] font-bold">Oct 26</TableCell>
            <TableCell className="text-sm">Mini-Scribe Pilot</TableCell>
            <TableCell className="text-sm text-gray-700">Transcript data flywheel starts</TableCell>
          </TableRow>
          <TableRow className="border-b border-[#D6C2E5]/20">
            <TableCell className="font-plus-jakarta font-bold text-[#2E003E]">Dominate</TableCell>
            <TableCell className="text-[#D6C2E5] font-bold">Mar 27</TableCell>
            <TableCell className="text-sm">AI Scribe → One-Click Claim</TableCell>
            <TableCell className="text-sm text-gray-700">Hands-free claim</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-plus-jakarta font-bold text-[#2E003E]">Compliance Edge</TableCell>
            <TableCell className="text-[#D6C2E5] font-bold">Jul 27</TableCell>
            <TableCell className="text-sm">FHIR PA-API Swap</TableCell>
            <TableCell className="text-sm text-gray-700">6 mo early vs CMS-0057-F</TableCell>
          </TableRow>
        </TableBody>
      </Table>
      
      <div className="bg-[#2E003E] text-white p-4 rounded-lg text-center text-sm">
        CMS mandates payer PA APIs by <span className="text-[#D6C2E5] font-bold">1 Jan 2027</span> — live <span className="text-[#D6C2E5] font-bold">6 mo early</span>.
      </div>
    </div>
  );
};

export default RoadmapSlide;
