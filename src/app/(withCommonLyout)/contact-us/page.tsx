"use client"

import type React from "react"
import { useState } from "react"
import {
    Send,
} from "lucide-react"
import { Input } from "@/components/ui/input"

export default function ContactPage() {
    // State for form fields
    const [helpDeskForm, setHelpDeskForm] = useState({
        name: "",
        phone: "",
        email: "",
        subject: "",
        message: "",
    })



    // Handle form input changes
    const handleHelpDeskChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setHelpDeskForm((prev) => ({ ...prev, [name]: value }))
    }



    // Handle form submissions
    const handleHelpDeskSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        // Reset form
        setHelpDeskForm({
            name: "",
            phone: "",
            email: "",
            subject: "",
            message: "",
        })
        // Show success message
        alert("আপনার অনুরোধ সফলভাবে জমা হয়েছে। আমরা শীঘ্রই আপনার সাথে যোগাযোগ করব।")
    }


    return (
        <div className="bg-gray-50 min-h-screen">
            <div className="container mx-auto px-4 py-6 md:py-8">
                {/* Page Header */}
                <div className="text-center mb-6 md:mb-10">
                    <h1 className="text-2xl md:text-4xl font-bold text-gray-800 mb-2">যোগাযোগ করুন</h1>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        আমাদের সাথে যোগাযোগ করতে নিচের যেকোনো মাধ্যম ব্যবহার করুন। আমরা আপনার প্রশ্ন বা মতামতের জন্য অপেক্ষা করছি।
                    </p>

                </div>

                <div className="mb-6">
                    <div className="bg-white rounded-xl shadow-sm overflow-hidden">

                        <div className="p-4 md:p-6">
                            <form onSubmit={handleHelpDeskSubmit}>
                                <div className="space-y-4">
                                    <div>
                                        <label htmlFor="helpdesk-name" className="block text-sm font-medium text-gray-700 mb-1">
                                            নাম <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="helpdesk-name"
                                            name="name"
                                            placeholder="আপনার নাম"
                                            className=" py-3"
                                            value={helpDeskForm.name}
                                            onChange={handleHelpDeskChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="helpdesk-phone" className="block text-sm font-medium text-gray-700 mb-1">
                                            ফোন <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="tel"
                                            id="helpdesk-phone"
                                            name="phone"
                                            placeholder="আপনার ফোন নম্বর"
                                            className=" py-3"
                                            value={helpDeskForm.phone}
                                            onChange={handleHelpDeskChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="helpdesk-email" className="block text-sm font-medium text-gray-700 mb-1">
                                            ইমেইল <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="email"
                                            id="helpdesk-email"
                                            name="email"
                                            placeholder="আপনার ইমেইল ঠিকানা"
                                            className=" py-3"
                                            value={helpDeskForm.email}
                                            onChange={handleHelpDeskChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="helpdesk-subject" className="block text-sm font-medium text-gray-700 mb-1">
                                            বিষয় <span className="text-red-500">*</span>
                                        </label>
                                        <Input
                                            type="text"
                                            id="helpdesk-subject"
                                            name="subject"
                                            placeholder="আপনার প্রশ্নের বিষয়"
                                            className=" py-3"
                                            value={helpDeskForm.subject}
                                            onChange={handleHelpDeskChange}
                                            required
                                        />
                                    </div>

                                    <div>
                                        <label htmlFor="helpdesk-message" className="block text-sm font-medium text-gray-700 mb-1">
                                            বার্তা <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="helpdesk-message"
                                            name="message"
                                            rows={4}
                                            placeholder="আপনার প্রশ্ন বা সমস্যা বিস্তারিত লিখুন"
                                            className="w-full px-3 py-2 text-sm md:text-base border border-primary rounded-lg focus:ring-2 focus:ring-primary focus:border-primary"
                                            value={helpDeskForm.message}
                                       
                                            onChange={handleHelpDeskChange}
                                            required
                                        ></textarea>
                                    </div>

                                    <button
                                        type="submit"
                                        className="w-full bg-emerald-600 hover:bg-emerald-700 text-white py-2.5 md:py-3 px-4 rounded-lg transition-colors flex items-center justify-center text-sm md:text-base"
                                    >
                                        <Send className="h-4 w-4 md:h-5 md:w-5 mr-2" />
                                        প্রেরণ করুন
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
