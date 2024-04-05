'use client'
import React, { useEffect, useState } from 'react';

export default function ListData() {
    interface HolidayData {
        tanggal: string;
        keterangan: string | null;
        is_cuti: boolean;
    }

    const [data, setData] = useState<HolidayData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const dataUrl = 'https://dayoffapi.vercel.app/api';
                const response = await fetch(dataUrl);
                const jsonData = await response.json();
                setData(jsonData);
            } catch (error) {
                console.error('Error fetching holidays:', error);
            }
        };

        fetchData();
    }, []);

    return (
        <>
            <h2 className="mt-10 mb-5 text-center font-extrabold text-2xl">LIBUR TAHUN 2024</h2>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white shadow-md border rounded-lg overflow-hidden">
                    <thead className="bg-gray-800 text-white">
                        <tr>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Tanggal</th>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Keterangan</th>
                            <th className="w-1/3 py-3 px-4 uppercase font-semibold text-sm">Cuti</th>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-200">
                        {data.map((holiday, index) => (
                            <tr key={index} className="text-gray-700 text-center">
                                <td className="w-1/3 py-3 px-4 border">{holiday.tanggal}</td>
                                <td className="w-1/3 py-3 px-4 border">{holiday.keterangan || 'Tidak ada keterangan'}</td>
                                <td className="w-1/3 py-3 px-4 border">{holiday.is_cuti ? 'Ya' : 'Tidak'}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </>
    );
}
