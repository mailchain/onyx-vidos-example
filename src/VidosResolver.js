/**
 * Create DID resolver that is using the Vidos service.
 *
 * - More info: [https://vidos.id/](https://vidos.id/).
 * - Vidos Dashboard: [https://dashboard.vidos.id/](https://dashboard.vidos.id/).
 * - Vidos Docs: [https://vidos.id/docs/](https://vidos.id/docs/).
 * - Quick Start Guide - Create a resolver instance: [https://vidos.id/docs/services/resolver/guides/create-instance/](https://vidos.id/docs/services/resolver/guides/create-instance/)
 */
class VidosResolver {
  /**
   * Create a new VidosResolver instance.
   *
   * @param {string} resolverInstanceUrl The URL of the Vidos resolver instance.
   * @param {string} apiKey The API key for the Vidos resolver instance.
   */
  constructor(resolverInstanceUrl, apiKey) {
    this.resolverInstanceUrl = resolverInstanceUrl;
    this.apiKey = apiKey;
  }

  /**
   * Resolve a DID URL using the Vidos service.
   *
   * @param {string} didUrl The DID URL to resolve.
   * @param {object} options Options for the resolution.
   * @returns {Promise<object>} The resolution response.
   */
  async resolve(didUrl, options) {
    const resolutionResponse = await fetch(
      `${this.resolverInstanceUrl}/${didUrl}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${this.apiKey}`,
          Accept: options?.accept ?? "",
        },
      },
    );

    return resolutionResponse.json();
  }
}

module.exports = VidosResolver;
