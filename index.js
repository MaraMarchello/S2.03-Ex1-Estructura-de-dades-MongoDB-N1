const connectDB = require('./db');
const { Glasses, Provider, Client, Optic } = require('./models/schemas');


connectDB();


async function createProvider() {
  try {
    const provider = new Provider({
      name: 'EyeGlass Supplies Inc.',
      phone: 5551234567,
      address: {
        street: 'Industry Avenue',
        number: 42,
        floor: 3,
        door: 'B',
        zip_code: '10001',
        city: 'New York',
        country: 'USA'
      }
    });

    const savedProvider = await provider.save();
    console.log('Provider saved:', savedProvider);
    return savedProvider;
  } catch (error) {
    console.error('Error creating provider:', error);
  }
}


async function createClient() {
  try {
    const client = new Client({
      name: 'John Doe',
      phone: 5559876543,
      email: 'john.doe@example.com',
      address: {
        street: 'Main Street',
        number: 123,
        floor: 2,
        door: 'A',
        zip_code: '10002',
        city: 'New York',
        country: 'USA'
      }
    });

    const savedClient = await client.save();
    console.log('Client saved:', savedClient);
    return savedClient;
  } catch (error) {
    console.error('Error creating client:', error);
  }
}


async function createGlasses() {
  try {
    const glasses = new Glasses({
      brand: 'Ray-Ban',
      graduation: {
        right: 1.5,
        left: 1.75
      },
      frame_type: 'Metal',
      color_frame: 'Gold',
      color_glass1: 'Clear',
      color_glass2: 'Clear',
      price: 199.99,
      sale_date: new Date(),
      employee: 101
    });

    const savedGlasses = await glasses.save();
    console.log('Glasses saved:', savedGlasses);
    return savedGlasses;
  } catch (error) {
    console.error('Error creating glasses:', error);
  }
}


async function createOptic(providerId, clientId) {
  try {
    const optic = new Optic({
      name: 'Perfect Vision Optics',
      address: {
        street: 'Vision Boulevard',
        number: 20,
        floor: 1,
        door: '',
        zip_code: '10003',
        city: 'New York',
        country: 'USA'
      },
      provider: providerId,
      client: clientId
    });

    const savedOptic = await optic.save();
    console.log('Optic saved:', savedOptic);
    return savedOptic;
  } catch (error) {
    console.error('Error creating optic:', error);
  }
}


async function updateClientWithGlasses(clientId, glassesId) {
  try {
    const client = await Client.findById(clientId);
    client.last_shoppings.push(glassesId);
    
    const updatedClient = await client.save();
    console.log('Client updated with glasses:', updatedClient);
    return updatedClient;
  } catch (error) {
    console.error('Error updating client:', error);
  }
}


async function run() {
  try {
    const provider = await createProvider();
    const client = await createClient();
    const glasses = await createGlasses();
    
    if (client && glasses) {
      await updateClientWithGlasses(client._id, glasses._id);
    }
    
    if (provider && client) {
      await createOptic(provider._id, client._id);
    }
    
    const clientsWithGlasses = await Client.find().populate('last_shoppings');
    console.log('Clients with their glasses:', JSON.stringify(clientsWithGlasses, null, 2));
    
    setTimeout(() => {
      console.log('Database operations completed.');
      process.exit(0);
    }, 2000);
    
  } catch (error) {
    console.error('Error in run function:', error);
  }
}


if (require.main === module) {
  run();
} 