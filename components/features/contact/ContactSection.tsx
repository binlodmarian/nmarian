import { Section } from "@/components/common/Section";
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { MdEmail, MdPhone, MdLocationOn } from "react-icons/md"
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa"

export function ContactSection(){
    return(
        <Section>
            <div className="container mx-auto px-6">
                <div className="flex justify-center items-center w-full mb-12">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                    <div className="w-fit font-extrabold text-3xl mx-5">CONTACT</div>
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
                    {/* Contact Form */}
                    <div className="bg-gradient-to-br from-muted to-background rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300">
                        <h2 className="font-extrabold text-2xl mb-6 text-primary">Send Me a Message</h2>
                        <form className="space-y-4">
                            <div>
                                <input 
                                    type="text" 
                                    placeholder="Your Name" 
                                    className="w-full border-2 border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <input 
                                    type="email" 
                                    placeholder="Your Email" 
                                    className="w-full border-2 border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 bg-white dark:bg-gray-900"
                                />
                            </div>
                            <div>
                                <Textarea 
                                    placeholder="Your Message..." 
                                    className="w-full border-2 border-border rounded-lg px-4 py-3 focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-300 min-h-32 bg-white dark:bg-gray-900 resize-none"
                                />
                            </div>
                            <Button className="w-full h-11 font-semibold hover:shadow-lg transition-all duration-300 transform hover:scale-105">
                                Send Message
                            </Button>
                        </form>
                    </div>

                    {/* Contact Info */}
                    <div className="bg-gradient-to-br from-muted to-background rounded-xl p-8 border-2 border-border hover:border-primary transition-all duration-300">
                        <h2 className="font-extrabold text-2xl mb-8 text-primary">Contact Information</h2>
                        <div className="space-y-6">
                            {/* Email */}
                            <Link href="mailto:binlodmarian09@gmail.com" className="group flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                                <div className="text-2xl text-primary group-hover:scale-120 transition-transform duration-300">
                                    <MdEmail />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Email</p>
                                    <p className="font-semibold group-hover:text-primary transition-colors duration-300">binlodmarian09@gmail.com</p>
                                </div>
                            </Link>

                            {/* Phone */}
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                                <div className="text-2xl text-primary">
                                    <MdPhone />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Phone</p>
                                    <p className="font-semibold">09100813569</p>
                                </div>
                            </div>

                            {/* Location */}
                            <div className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-all duration-300">
                                <div className="text-2xl text-primary">
                                    <MdLocationOn />
                                </div>
                                <div>
                                    <p className="text-sm text-muted-foreground">Location</p>
                                    <p className="font-semibold">Philippines</p>
                                </div>
                            </div>

                            {/* Social Links */}
                            <div className="pt-6 border-t border-border">
                                <p className="text-sm text-muted-foreground mb-4">Follow Me</p>
                                <div className="flex gap-4">
                                    <Link href="https://github.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                                        <FaGithub size={24} />
                                    </Link>
                                    <Link href="https://linkedin.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                                        <FaLinkedin size={24} />
                                    </Link>
                                    <Link href="https://twitter.com" target="_blank" className="w-12 h-12 flex items-center justify-center rounded-lg bg-muted hover:bg-primary hover:text-white transition-all duration-300 transform hover:scale-110">
                                        <FaTwitter size={24} />
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center w-full mt-12">
                    <div className="bg-black h-[8px] w-full flex-1"></div>
                </div>
            </div>
        </Section>
    );
}