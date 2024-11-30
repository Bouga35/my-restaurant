export interface MenuItem {
    name: string;
    price: string;
    description: string;
    image: string;
  }
  
  export interface MenuSection {
    category: string;
    items: MenuItem[];
  }
  
  export const menuItems: MenuSection[] = [
    {
      category: "Starters",
      items: [
        {
          name: "Bruschetta",
          price: "12",
          description: "Grilled bread with tomatoes, garlic, and fresh basil",
          image: "https://images.unsplash.com/photo-1572695157366-5e585ab2b69f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Calamari",
          price: "16",
          description: "Crispy fried squid with lemon aioli",
          image: "https://images.unsplash.com/photo-1604909052743-94e838986d24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    },
    {
      category: "Main Course",
      items: [
        {
          name: "Ribeye Steak",
          price: "38",
          description: "12oz grass-fed beef with roasted vegetables",
          image: "https://images.unsplash.com/photo-1546964124-0cce460f38ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        },
        {
          name: "Grilled Salmon",
          price: "32",
          description: "Fresh Atlantic salmon with herb butter",
          image: "https://images.unsplash.com/photo-1485921325833-c519f76c4927?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
        }
      ]
    }
  ];