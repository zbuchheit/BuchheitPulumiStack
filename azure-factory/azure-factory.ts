
abstract class AzureFactory{

    getAzureFactory(string resource): AzureFactory{

        switch(resource) {
            case APPSERVICE:
                return new AppServiceFactory();
            case RESOURCEGROUP:
                return new ResourceGroupFactory();    
        }
        
    }
    abstract getAzureResource: Resource(Resourcetype: resourceType);

    abstract getValidator: Validator(Resourcetype: resourceType);

}