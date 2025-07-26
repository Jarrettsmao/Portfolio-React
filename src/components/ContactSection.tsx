import { Mail, Phone, Map, Linkedin } from "lucide-react"
// import { cn } from "../lib/utils"

export const ContactSection = () => {

    // used for sending a message via email
    //uses react toast
    // const handleSubmit = (e) => {

    // }


    return (
        <section 
            id="contact"
            className="py-24 px-4 relative bg-secondary/30"
        >
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
                    Get In <span className="text-primary"> Touch </span>
                </h2>

                <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
                    I’m always excited to connect with like-minded professionals and explore new opportunities! 
                    If you’re looking for someone passionate about software development and eager to make an impact, feel free to reach out.
                    Whether it’s a job opportunity, a project collaboration, or just a conversation about tech, I’d love to chat and see how we can work together. 
                    Let’s connect!
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 justify-items-center">
                    <div className="space-y-8">
                        <h3 className="text-2xl font-semibold mb-6"> Contact Information</h3>

                        {/* Email */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items=start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Mail className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Email</h4>
                                    <a 
                                    href="mailto:jarrettsmao@gmail.com" 
                                    className="text-muted-foreground hover:text-primary transition-colors ">
                                        jarrettsmao@gmail.com
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Phone # */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items=start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Phone className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Phone</h4>
                                    <a 
                                    href="tel:+14159878126" 
                                    className="text-muted-foreground hover:text-primary transition-colors ">
                                        (415) 987-8126
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="space-y-6 justify-center">
                            <div className="flex items=start space-x-4">
                                <div className="p-3 rounded-full bg-primary/10">
                                    <Map className="h-6 w-6 text-primary" />{" "}
                                </div>
                                <div>
                                    <h4 className="font-medium"> Location</h4>
                                    <a 
                                    className="text-muted-foreground hover:text-primary transition-colors ">
                                        San Francisco Bay Area, California, US
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>

                
                    {/* Social media links */}
                    <div className="pt-50">
                        <h4 className="font-medium"> Connect With Me</h4>
                        <div className="flex space-x-4 justify-center mt-2"> </div>
                            <a 
                                href="https://linkedin.com/in/jarrett-mao/"
                                target="_blank"
                            >
                                <Linkedin />
                            </a>
                    </div>

                    {/* contact form */}
                    {/* <div className="bg-card p-8 rounded-lg shadow-xs">
                        <h3 className="text-2xl font-semibold mb-6"> Send a Message </h3> */}

                        {/* contact form box name*/}
                        {/* <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium mb-2 text-center p-2"> Your Name</label>
                                <input 
                                    type="text" 
                                    id="name" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="Spike Spiegel..."
                                ></input>
                            </div>
                        </form> */}

                        {/* contact form box email*/}
                        {/* <form className="space-y-6">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium mb-2 text-center p-2"> Your Email</label>
                                <input 
                                    type="email" 
                                    id="email" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary"
                                    placeholder="spacecowboy@gmail.com..."
                                ></input>
                            </div>
                        </form> */}

                        {/* contact form box message*/}
                        {/* <form className="space-y-6">
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium mb-2 text-center p-2"> Your Message</label>
                                <textarea 
                                    id="message" 
                                    name="message" 
                                    required 
                                    className="w-full px-4 py-3 rounded-md border border-input bg-background focus:outline-hidden focus:ring-2 focus:ring-primary resize-none"
                                    placeholder="Hello, I'd like to talk about..."
                                ></textarea>
                            </div>

                            <button 
                                type="submit" 
                                className={cn("cosmic-button w-full flex items-center justify-center gap-2",
                                
                            )}>
                                Send Message
                                <Send size={16} />
                            </button>
                        </form>
                    </div> */}
                </div>
            </div>
            
        </section>
    )
}