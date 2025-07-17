import { Card } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Emil Arge Lumb",
    role: "CEO & Grundlægger",
    email: "emil@now.dk",
    image: "/lovable-uploads/71b9e3b1-ef2a-4801-9308-ecdea9b6a1c8.png",
    bgColor: "bg-blue-600"
  },
  {
    name: "Lars Jensen",
    role: "CTO & Udvikler",
    email: "lars@now.dk", 
    image: "/lovable-uploads/71b9e3b1-ef2a-4801-9308-ecdea9b6a1c8.png",
    bgColor: "bg-orange-500"
  },
  {
    name: "Mette Nielsen",
    role: "Head of Design",
    email: "mette@now.dk",
    image: "/lovable-uploads/71b9e3b1-ef2a-4801-9308-ecdea9b6a1c8.png", 
    bgColor: "bg-blue-700"
  },
  {
    name: "Live Chat",
    role: "Support Team",
    email: "support@now.dk",
    image: null,
    bgColor: "bg-yellow-500"
  }
];

const TeamSection = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Spørgsmål? Vi sidder klar til at hjælpe
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vores erfarne team står klar til at hjælpe dig med at komme i gang 
            og få det maksimale ud af vores platform.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {teamMembers.map((member, index) => (
            <Card key={index} className={`${member.bgColor} text-white p-6 hover:scale-105 transition-transform duration-300`}>
              <div className="text-center">
                {member.image ? (
                  <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold">{member.name.charAt(0)}</span>
                  </div>
                ) : (
                  <div className="w-20 h-20 rounded-full bg-white/20 mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl">💬</span>
                  </div>
                )}
                
                <h3 className="text-lg font-bold mb-2">{member.name}</h3>
                <p className="text-sm opacity-90 mb-4">{member.role}</p>
                
                <div className="bg-white/20 rounded-lg px-4 py-2">
                  <span className="text-sm">{member.email}</span>
                </div>
                
                {member.name === "Live Chat" && (
                  <div className="mt-4">
                    <span className="text-xs bg-white/30 px-3 py-1 rounded-full">
                      Chat nu
                    </span>
                  </div>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;